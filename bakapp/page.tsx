import Link from "next/link";
import { compareDesc, format } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Intro } from "./intro";
import {
  Main,
  MainFlex,
  IntroWrap,
  LatestPost,
  SpaceGapSpan,
} from "./components/Styles";

export default function Home() {
  const latestPosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 1);

  return (
    <Main className={`hero`}>
      <MainFlex>
        <IntroWrap>
          <Intro />
        </IntroWrap>
        <LatestPost>
          <p>Latest Posts</p>
          {latestPosts.map((post, i) => (
            <p key={i}>
              <SpaceGapSpan>
                {format(new Date(Date.parse(post.date)), "MMM dd")}
              </SpaceGapSpan>
              <Link key={post._id} href={post.url} aria-label={post.title}>
                {post.title}
              </Link>
            </p>
          ))}
        </LatestPost>
      </MainFlex>
    </Main>
  );
}
