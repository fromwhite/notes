import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { format, parseISO } from "date-fns";
import {
  useMDXComponent,
  getMDXComponent,
  useLiveReload,
} from "next-contentlayer/hooks";
import type { Post as PostType } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import { Article, ArticlePostTime, ArticleTag } from "@/common/Styles";
import { Layout } from "@/common/Layout";

type PostProps = {
  post: PostType;
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<{ post: PostType }>> {
  const post = allPosts.find((post) => post.slug === params?.slug);
  // Redirect
  // 404 if the post does not exist.
  return typeof post === "undefined"
    ? {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
    : {
        props: {
          post,
        },
      };
}

const Slug: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}: PostProps) => {
  const MDXContent = useMDXComponent(post.body.code);
  // const MDXContent = getMDXComponent(post.body.code);
  useLiveReload();

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Layout head={{ title: post.title }}>
        <Article className={`hero`}>
          <h1>{post.title}</h1>
          <ArticlePostTime dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </ArticlePostTime>
          <ArticleTag>
            {post.tags.map((item, i) => (
              <a key={i}>{"#" + item}</a>
            ))}
          </ArticleTag>
          <MDXContent />
        </Article>
      </Layout>
    </>
  );
};

export default Slug;
