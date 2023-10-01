import { initTRPC, TRPCError } from '@trpc/server'
import { hash } from 'argon2'
import { z } from 'zod'
import superjson from 'superjson'

import { Context } from './context'
import { signUpSchema } from '../common/schema/auth'
import { inviteSchema } from '../common/schema/invite'

const t = initTRPC.context<Context>().create({
  transformer: superjson,
})

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!(ctx.session && ctx.session.user.role === 'admin')) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'You must be logged in to access this resource',
    })
  }
  return next()
})

export const protectedProcedure = t.procedure.use(isAuthed)

export const serverRouter = t.router({
  signup: protectedProcedure
    .input(signUpSchema)
    .mutation(async ({ input, ctx }) => {
      const { username, email, password } = input

      const exists = await ctx.prisma.user.findUnique({
        where: { email },
      })

      if (exists) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'User already exists.',
        })
      }

      const hashedPassword = await hash(password)

      const result = await ctx.prisma.user.create({
        data: { username, email, password: hashedPassword },
      })

      return {
        status: 201,
        message: 'Account created successfully',
        result: result.email,
      }
    }),
  hello: t.procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      }
    }),
  invite: protectedProcedure
    .input(inviteSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const { email } = input
        const hashedEmail = await hash(email)

        const exists = await ctx.prisma.user.findUnique({
          where: { email },
        })

        if (exists) {
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'User already exists.',
          })
        }

        const result = await ctx.prisma.user.create({
          data: { username: email, email, password: hashedEmail },
        })

        // todo: invite guys via email,only admin register
        // https://resend.com/docs/send-with-nextjs
        // The verification link should be sent via email
        // Not completing the email module, such as resend
        // Account registration must now be completed by the system administrator
        return {
          status: 201,
          message: 'Account created successfully',
          result: { token: hashedEmail, email: result.email },
        }
      } catch (err: any) {
        if (err.code === 'P2002') {
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'Email already exists',
          })
        }
        throw err
      }
    }),
})

export type ServerRouter = typeof serverRouter
