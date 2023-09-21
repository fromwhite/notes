import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { useHotkeys } from "react-hotkeys-hook";

export default function App({ Component, pageProps }: AppProps) {
  useHotkeys("mod+k", () => {
    console.log(`Shortcut Key Test`);
  });

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE || "SILO"}</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
