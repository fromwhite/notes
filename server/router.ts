import { initTRPC, TRPCError } from '@trpc/server'
import { hash } from 'argon2'
import superjson from 'superjson'
import { Context } from './context'
import { signUpSchema } from '../common/schema/auth'
import { inviteSchema } from '../common/schema/invite'
import { cfVerifyType, cf_verify } from '@/common/service'
import { sendEmail } from '@/common/service'
import { v4 as uuidv4 } from 'uuid'

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
  signup: t.procedure.input(signUpSchema).mutation(async ({ input, ctx }) => {
    const { username, email, password, cf_turnstile, token } = input

    if (!cf_turnstile || !token) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'Invalid credentials.',
      })
    }

    const cf_verified = await cf_verify(cf_turnstile)
    const cf_verify_json = (await cf_verified.json()) as cfVerifyType

    if (!cf_verify_json.success) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'Invalid credentials.',
      })
    }

    const invited = await ctx.prisma.invitation.findFirst({
      where: { token, tokenUsed: false },
    })

    if (!invited) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'Invalid invited.',
      })
    }

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

    await ctx.prisma.invitation.update({
      where: {
        token,
      },
      data: {
        tokenUsed: true,
      },
    })

    return {
      status: 201,
      message: 'Account created successfully',
      result: result.email,
    }
  }),

  invite: protectedProcedure
    .input(inviteSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const { email } = input

        const token = uuidv4()

        const link =
          process.env.NODE_ENV == 'development'
            ? process.env.LOCAL_URL
            : process.env.NODE_ENV === 'production'
            ? process.env.APP_URL
            : ''

        await sendEmail('No reply,', email, `${link}/invite/${token}`)

        await ctx.prisma.invitation.create({
          data: { token, email },
        })

        return {
          status: 201,
          message: 'Invitation email sent successfully',
        }
      } catch (err: any) {
        throw err
      }
    }),
})

export type ServerRouter = typeof serverRouter
