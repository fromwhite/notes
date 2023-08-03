import styles from "./page.module.scss";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent, getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: PageProps) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  return { title: post?.title };
};

export default async function ({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  // 404 if the post does not exist.
  if (!post) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  // const MDXContent = useMDXComponent(post.body.code);
  const MDXContent = getMDXComponent(post.body.code);

  return (
    <div className={[styles.post, `hero`].join(" ").trim()}>
      <MDXContent />
    </div>
  );
}
