import type { NextPage } from 'next'
import Script from 'next/script'
import Head from 'next/head'
import { useCallback, useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, SignUp } from '../../common/schema/auth'
import { trpc } from '../../common/trpc'
import { RegisterWarp, RegisterBox } from '@/components/Styles'
import { requireNotAuth } from '@/common/protect'
import { useToast } from '@/components/ui/toast'
import { useDarkMode } from '@/components/hook/useDarkMode'

export const getServerSideProps = requireNotAuth(async (ctx) => {
  return { props: {} }
})

const SignUp: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const formRegisterRef = useRef(null!)
  const { Toast } = useToast()
  const [_theme, _] = useDarkMode()
  const [theme, set] = useState('dark')

  useEffect(() => {
    if (_theme == 'light') set('light')
  }, [])

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SignUp>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      cf_turnstile: '',
      token: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  errors.password && Toast(errors.password?.message as string)

  const { mutateAsync, isLoading } = trpc.signup.useMutation()

  const onSubmit = useCallback(
    async (data: SignUp) => {
      try {
        const formData = new FormData(formRegisterRef.current)
        const cf_turnstile = formData.get('cf-turnstile-response') as string

        if (!id) {
          Toast(`Invited failed`)
          return
        }

        if (!cf_turnstile) {
          Toast(`cloudflare turnstile failed`)
          return
        }

        const result = await mutateAsync({
          ...data,
          token: id as string,
          cf_turnstile,
        })
        if (result.status === 201) {
          reset()
          Toast(result.message)
          router.push('/signin')
        }
      } catch (err) {
        Toast((err as { message: string }).message)
      }
    },
    [mutateAsync, router, reset]
  )

  return (
    <>
      <Head>
        <title> - Register</title>
      </Head>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async={true}
        defer={true}
      />
      <RegisterWarp
        css={{
          'color-scheme': theme,
        }}
      >
        <RegisterBox>
          <form onSubmit={handleSubmit(onSubmit)} ref={formRegisterRef}>
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
                    placeholder="Type your username(4 ~ 20)"
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
                    placeholder="Type your password(8 ~ 20)"
                    {...field}
                  />
                </>
              )}
            />

            <div
              className="cf-turnstile"
              data-language="en"
              data-theme={'auto'}
              data-sitekey={
                process.env.NODE_ENV == 'development'
                  ? process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY_DEV
                  : process.env.NODE_ENV === 'production'
                  ? process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY
                  : null
              }
            />

            <button disabled={isLoading} type="submit">
              Sign Up
            </button>
          </form>
        </RegisterBox>
      </RegisterWarp>
    </>
  )
}

export default SignUp
