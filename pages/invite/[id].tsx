import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { signUpSchema, SignUp } from '../../common/schema/auth'
import { trpc } from '../../common/trpc'
import { RegisterWarp, RegisterBox } from '@/components/Styles'
import { requireAdmin } from '@/common/protect'

export const getServerSideProps = requireAdmin(async (ctx) => {
  return { props: {} }
})

const SignUp: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { handleSubmit, control, reset } = useForm<SignUp>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  const { mutateAsync, isLoading } = trpc.signup.useMutation()

  const onSubmit = useCallback(
    async (data: SignUp) => {
      try {
        const result = await mutateAsync(data)
        if (result.status === 201) {
          reset()
          router.push('/')
        }
      } catch (err) {
        console.error(err)
      }
    },
    [mutateAsync, router, reset]
  )

  return (
    <>
      <Head>
        <title> - Register</title>
      </Head>
      <RegisterWarp>
        <RegisterBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Register</h2>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <>
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Type your username..."
                    {...field}
                  />
                </>
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Type your email..."
                    {...field}
                  />
                </>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Type your password..."
                    {...field}
                  />
                </>
              )}
            />

            <div>
              <button disabled={isLoading} type="submit">
                Sign Up
              </button>
              <Link href="/">Go to SignIn</Link>
            </div>
          </form>
        </RegisterBox>
      </RegisterWarp>
    </>
  )
}

export default SignUp
