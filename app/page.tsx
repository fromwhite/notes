import styles from "./page.module.css";
import Link from "next/link";
import { GetStaticProps } from "next";
import { compareDesc, format } from "date-fns";

import { allPosts } from "contentlayer/generated";
import { Intro } from "./intro";

export default function Home() {
  const latestPosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 1);

  return (
    <main className={[styles.main, `hero`].join(" ").trim()}>
      <div className={styles.wrapper}>
        <div className={styles.session}>
          <div className={styles.intro}>
            <Intro />
          </div>
          <div className={styles.latest_posts}>
            <p className="font-w-600">Latest Posts</p>
            {latestPosts.map((post, i) => (
              <p key={i}>
                <span className="space-gap">
                  {format(new Date(Date.parse(post.date)), "MMM dd")}
                </span>
                <Link key={post._id} href={post.url} aria-label={post.title}>
                  {post.title}
                </Link>
              </p>
            ))}
          </div>
        </div>
        <aside className={styles.aside}></aside>
      </div>
    </main>
  );
}
