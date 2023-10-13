import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { Analytics } from '@vercel/analytics/react'
import { trpc } from '../common/trpc'
import { ToastProvider } from '@/components/ui/toast'

interface CustomAppProps extends AppProps {
  pageProps: {
    session?: Session
  } & AppProps['pageProps']
}

const App = ({ Component, pageProps }: CustomAppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE || 'Note'}</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
      <Analytics />
    </SessionProvider>
  )
}

export default trpc.withTRPC(App)
