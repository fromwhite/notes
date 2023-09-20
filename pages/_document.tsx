import { Html, Head, Main, NextScript } from "next/document";
import { getCssText, globalStyles } from "../common/stitches.config";

export default function Document() {
  globalStyles();

  return (
    <Html
      lang="en"
      dir="ltr"
      color-scheme="light dark"
      suppressHydrationWarning
    >
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="keywords" content="silo note blog" />
        <meta
          name="description"
          content="A minimalist notes/blog created by nxex.js on vercel"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <script
          key="color-scheme"
          dangerouslySetInnerHTML={{
            __html: `(function() { try {
              var mode = localStorage.getItem('MODE');
              var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
              if (!mode && isDark)  document.documentElement.classList.add('dark-theme');
              if (!mode) return
              document.documentElement.classList.add(mode+'-theme');
            } catch (e) {} })()`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
