import { type Metadata } from "next/types";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format } from "date-fns";
import Link from "next/link";

// import { blogConfig } from "@/config";
// import { PostPaginator } from "@/components/post-paginator";

// const { url, title, description } = blogConfig.pages.posts;

// const ogImage = {
//   url: `${blogConfig.url}/og?title=${title}`,
// };

// export const metadata: Metadata = {
//   title,
//   description,
//   openGraph: {
//     type: "website",
//     url: `${blogConfig.url}${url}`,
//     title,
//     description,
//     images: [ogImage],
//   },
//   twitter: {
//     title,
//     description,
//     images: ogImage,
//     card: "summary_large_image",
//   },
// };

let year = 0;

export default function () {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="hero h-full px-6 pb-12 sm:px-12">
      {/* Paginator */}
      <ul className="reset">
        {posts.map((post) => {
          const current = new Date(post.date).getFullYear();
          let slash;

          if (current !== year) {
            slash = true;
            year = current;
          } else {
            slash = false;
          }

          return (
            <>
              {slash ? (
                <li>
                  <p className="font-w-600">{current}</p>
                </li>
              ) : null}
              <li>
                <p>
                  <span className="space-gap">
                    {format(new Date(Date.parse(post.date)), "MMM dd")}
                  </span>
                  <Link key={post._id} href={post.url} aria-label={post.title}>
                    {post.title}
                  </Link>
                </p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
