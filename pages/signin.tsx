import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { InviteWrapper, RegisterWarp, RegisterBox } from '@/components/Styles'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import { trpc } from '../common/trpc'
import { signIn } from 'next-auth/react'
import { SignInSchema, SignIn } from '../common/schema/auth'
import { requireNotAuth } from '@/common/protect'

export const getServerSideProps = requireNotAuth(async (ctx) => {
  return { props: {} }
})

// reCAPTCHA
export default function SignIn() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { handleSubmit, control, reset } = useForm<SignIn>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SignInSchema),
  })

  const onSubmit = useCallback(
    async (data: SignIn) => {
      try {
        setLoading(true)
        await signIn('credentials', { ...data, callbackUrl: '/' })
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
      <InviteWrapper>
        <RegisterWarp>
          <RegisterBox>
            <form onSubmit={handleSubmit(onSubmit)}>
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
