import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { verify } from 'argon2'
import prisma from './prisma'
import { SignInSchema } from './schema/auth'
import { cfVerifyType, cf_verify } from '@/common/service'

type cf_verify_type = {
  success: boolean
  message?: string
  data?: any
}

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jsmith@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
        cf_turnstile: { type: 'toekn' },
      },

      /**
       * I don't like it, but I think it's better than turning off strict mode.
       * 2023/9/27 authorize type error
       * https://stackoverflow.com/questions/74089665/next-auth-credentials-provider-authorize-type-error
       */
      authorize: async (credentials) => {
        try {
          const { email, password, cf_turnstile } =
            await SignInSchema.parseAsync(credentials)

          if (!cf_turnstile) throw new Error('Invalid credentials')

          const cf_verified = await cf_verify(cf_turnstile)
          const cf_verify_json = (await cf_verified.json()) as cfVerifyType

          if (!cf_verify_json.success) throw new Error('Invalid credentials')

          const result = await prisma.user.findUnique({
            where: { email },
          })

          if (!result) throw new Error('User does not exist')

          const isValidPassword = await verify(result.password, password)

          if (!isValidPassword) throw new Error('Incorrect password')

          return {
            id: result.id,
            email,
            role: result.role,
            username: result.username,
            verified: result.verified,
          } as any
        } catch {
          throw new Error('Authentication failed')
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.userId = user.id
        token.email = user.email
        token.username = user.username
        token.role = user.role
        token.verified = user.verified
      }

      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.userId = token.userId
        session.user.email = token.email
        session.user.username = token.username
        session.user.role = token.role
        session.user.verified = token.verified
      }

      return session
    },
  },
  jwt: {
    maxAge: 15 * 24 * 30 * 60, // 15 days
  },
  pages: {
    signIn: '/',
    newUser: '/invite',
  },
  secret: '2d7ca6ce32c4c954fefaf8e825789288',
}
