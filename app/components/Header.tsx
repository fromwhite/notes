import styles from "./Header.module.scss";
import Link from "next/link";
import { Avatar, Git, Twitter, Instagram } from "./geist";
import HeaderPanel from "./Header.panel";

export default () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <Link className={styles.avatar} href="/">
              <Avatar />
            </Link>
            <div className={styles.title}>
              <p>{process.env.NEXT_PUBLIC_TITLE}</p>
            </div>
          </div>

          <nav className={styles.nav}>
            {/* <span>Snippets</span> */}

            <HeaderPanel />
            {/* sns */}
            {process.env.NEXT_PUBLIC_TWITTER && (
              <a
                href={process.env.NEXT_PUBLIC_TWITTER}
                className={styles.svg}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            )}
            {process.env.NEXT_PUBLIC_INSTAGRAM && (
              <a
                href={process.env.NEXT_PUBLIC_INSTAGRAM}
                className={styles.svg}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            )}
            {process.env.NEXT_PUBLIC_GITHUB && (
              <a
                href={process.env.NEXT_PUBLIC_GITHUB}
                className={styles.svg}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Git />
              </a>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
