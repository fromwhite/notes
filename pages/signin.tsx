import Link from 'next/link'
import Script from 'next/script'
import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { InviteWrapper, RegisterWarp, RegisterBox } from '@/components/Styles'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState, useRef } from 'react'
import { trpc } from '../common/trpc'
import { signIn } from 'next-auth/react'
import { SignInSchema, SignIn } from '../common/schema/auth'
import { requireNotAuth } from '@/common/protect'

export const getServerSideProps = requireNotAuth(async (ctx) => {
  return { props: {} }
})

// test reCAPTCHA => cloudflare turnstile
/**
 *  reference:
 *  examples/cloudflare-turnstile
 *  https://github.com/vercel/next.js/tree/dba978f4bac3a3f072dcbaff68bba3f75c2bbe15/examples/cloudflare-turnstile
 *
 *  https://docs.page/marsidev/react-turnstile/validating-a-token
 * @returns
 */
export default function SignIn() {
  const router = useRouter()
  const formRef = useRef(null!)
  const [loading, setLoading] = useState(false)
  const { handleSubmit, control, reset } = useForm<SignIn>({
    defaultValues: {
      email: '',
      password: '',
      cf_turnstile: '',
    },
    resolver: zodResolver(SignInSchema),
  })

  const onSubmit = useCallback(
    async (data: SignIn) => {
      const formData = new FormData(formRef.current)
      const cf_turnstile = formData.get('cf-turnstile-response')

      if (!cf_turnstile) {
        console.error(`cloudflare turnstile failed`)
        return
      }

      try {
        setLoading(true)
        await signIn('credentials', { ...data, cf_turnstile, callbackUrl: '/' })
        reset()
        setLoading(false)
        router.push('/')
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
              <h2>Welcome back!</h2>
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

              <div
                className="cf-turnstile checkbox"
                data-sitekey={
                  process.env.NODE_ENV == 'development'
                    ? process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY_DEV
                    : process.env.NODE_ENV === 'production'
                    ? process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY
                    : null
                }
              />

              <div>
                <button disabled={loading}>Sign In</button>
                <Link href="/invite" className="link">
                  Go to Sign Up
                </Link>
              </div>
            </form>
          </RegisterBox>
        </RegisterWarp>
      </InviteWrapper>
    </Layout>
  )
}
