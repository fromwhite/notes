import Link from 'next/link'
import { compareDesc, format } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Layout } from '@/components/Layout'
import { trpc } from '../common/trpc'
import {
  Main,
  MainFlex,
  IntroWrap,
  LatestPost,
  SpaceGapSpan,
} from '../components/Styles'
import Intro from './intro.mdx'
import { Loading } from '@/components/ui'
import { useCallback } from 'react'
import { useSession } from 'next-auth/react'

import { Inter, Major_Mono_Display } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const major_mono = Major_Mono_Display({
  subsets: ['latin'],
  variable: '--font-major',
  weight: '400',
  display: 'swap',
})

export default function Home() {
  const { data: session, status } = useSession()

  // if (status === 'loading') {
  //   return (
  //     <Loading className={[major_mono.variable, inter.variable].join(' ')} />
  //   )
  // }

  // if (!session) {
  //   return <div>Not authenticated</div>
  // }

  // const hello = trpc.hello.useQuery({ text: 'client' })

  // if (!hello.data) {
  //   return (
  //     <Loading className={[major_mono.variable, inter.variable].join(' ')} />
  //   )
  // }

  const latestPosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 1)
  return (
    <Layout head={{ offsetHeight: 120 }}>
      <Main className={[major_mono.variable, inter.variable, 'hero'].join(' ')}>
        <MainFlex>
          <IntroWrap>
            <Intro />
          </IntroWrap>
          <LatestPost>
            <p>Latest Posts</p>
            {latestPosts.map((post, i) => (
              <p key={i}>
                <SpaceGapSpan>
                  {format(new Date(Date.parse(post.date)), 'MMM dd')}
                </SpaceGapSpan>
                <Link key={post._id} href={post.url} aria-label={post.title}>
                  {post.title}
                </Link>
              </p>
            ))}
          </LatestPost>
        </MainFlex>
      </Main>
    </Layout>
  )
}
