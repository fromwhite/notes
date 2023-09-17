import styles from "./page.module.scss";
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

type PageProps = {
  params: {
    slug: string;
  };
};

type PostProps = {
  post: PostType;
};

// export const generateStaticParams = async () =>
//   allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

// export const generateMetadata = ({ params }: PageProps) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

//   return { title: post?.title };
// };

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
      <article className={[styles.post, `hero`].join(" ").trim()}>
        {/* <div>
          <h1>{post.title}</h1>
          <time dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div> */}
        <MDXContent />
      </article>{" "}
    </>
  );
};

export default Slug;
