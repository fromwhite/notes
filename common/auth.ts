import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { verify } from 'argon2'
import prisma from './prisma'
import { SignInSchema } from './schema/auth'

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
      },

      /**
       * I don't like it, but I think it's better than turning off strict mode.
       * 2023/9/27 authorize type error
       * https://stackoverflow.com/questions/74089665/next-auth-credentials-provider-authorize-type-error
       */
      authorize: async (credentials) => {
        try {
          const { email, password } = await SignInSchema.parseAsync(credentials)

          const result = await prisma.user.findUnique({
            where: { email },
          })

          if (!result) return null

          const isValidPassword = await verify(result.password, password)

          if (!isValidPassword) return null

          return {
            id: result.id,
            email,
            role: result.role,
            username: result.username,
          } as any
        } catch {
          return null
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
      }

      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.userId = token.userId
        session.user.email = token.email
        session.user.username = token.username
        session.user.role = token.role
      }

      return Object.assign({ strategy: 'jwt' }, session)
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
