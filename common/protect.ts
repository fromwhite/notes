import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { unstable_getServerSession } from 'next-auth'

import { nextAuthOptions } from './auth'

export const requireAuth =
  (func: GetServerSideProps) => async (ctx: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(
      ctx.req,
      ctx.res,
      nextAuthOptions
    )

    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    return await func(ctx)
  }

export const requireAdmin =
  (func: GetServerSideProps) => async (ctx: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(
      ctx.req,
      ctx.res,
      nextAuthOptions
    )

    if (!(session && session.user.role === 'admin')) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    return await func(ctx)
  }

export const requireNotAuth =
  (func: GetServerSideProps) => async (ctx: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(
      ctx.req,
      ctx.res,
      nextAuthOptions
    )

    if (session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    return await func(ctx)
  }
