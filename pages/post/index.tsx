import { allPosts } from "contentlayer/generated";
import { compareDesc, format } from "date-fns";
import Link from "next/link";
import React from "react";
import { Layout } from "@/common/Layout";

let year = 0;

export default function Post() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <Layout>
      <div className="hero">
        <ul className="reset" key={"reset"}>
          {posts.map((post, index) => {
            const current = new Date(post.date).getFullYear();
            let slash;

            if (current !== year) {
              slash = true;
              year = current;
            } else {
              slash = false;
            }

            return (
              <React.Fragment key={post._id + index}>
                {slash ? (
                  <li key={current}>
                    <p className="font-w-600">{current}</p>
                  </li>
                ) : null}
                <li key={index}>
                  <p>
                    <span className="space-gap">
                      {format(new Date(Date.parse(post.date)), "MMM dd")}
                    </span>
                    <Link
                      key={post._id}
                      href={post.url}
                      aria-label={post.title}
                    >
                      {post.title}
                    </Link>
                  </p>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
