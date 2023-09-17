import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
// import "normalize.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE || "SILO"}</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
      <Analytics />
    </>
  );
}
