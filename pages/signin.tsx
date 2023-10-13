import Script from 'next/script'
import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { InviteWrapper, RegisterWarp, RegisterBox } from '@/components/Styles'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState, useRef } from 'react'
import { signIn } from 'next-auth/react'
import { SignInSchema, SignIn } from '../common/schema/auth'
import { requireNotAuth } from '@/common/protect'
import { useToast } from '@/components/ui/toast'

export const getServerSideProps = requireNotAuth(async (ctx) => {
  return { props: {} }
})

export default function SignIn() {
  const router = useRouter()
  const formRef = useRef(null!)
  const [loading, setLoading] = useState(false)
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SignIn>({
    defaultValues: {
      email: '',
      password: '',
      cf_turnstile: '',
    },
    resolver: zodResolver(SignInSchema),
  })

  const { Toast } = useToast()

  errors.password && Toast(errors.password?.message as string)

  const onSubmit = useCallback(
    async (data: SignIn) => {
      const formData = new FormData(formRef.current)
      const cf_turnstile = formData.get('cf-turnstile-response')

      if (!cf_turnstile) {
        Toast(`cloudflare turnstile failed`)
        return
      }

      try {
        setLoading(true)
        const result = await signIn('credentials', {
          ...data,
          cf_turnstile,
          redirect: false,
          // callbackUrl: router.asPath,
        })

        if (result?.ok) {
          reset()
          router.push('/')
        } else {
          Toast(result?.error as string)
        }
        setLoading(false)
      } catch (err) {
        console.error(err)
        setLoading(false)
      }
    },
    [reset]
  )

  return (
    <Layout>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async={true}
        defer={true}
      />
      <InviteWrapper>
        <RegisterWarp>
          <RegisterBox>
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      aria-label="Email field"
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
                      aria-label="Password field"
                      placeholder="Type your password..."
                      {...field}
                    />
                  </>
                )}
              />

              <div
                className="cf-turnstile checkbox"
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

              <button disabled={loading} type="submit">
                Sign In
              </button>
            </form>
          </RegisterBox>
        </RegisterWarp>
      </InviteWrapper>
    </Layout>
  )
}
