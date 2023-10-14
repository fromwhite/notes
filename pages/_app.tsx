import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastProvider } from '@/components/ui/toast'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE || 'Note'}</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </>
  )
}

export default App
