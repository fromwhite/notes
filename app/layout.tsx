import "./globals.css";
import { Inter, Major_Mono_Display } from "next/font/google";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const major_mono = Major_Mono_Display({
  subsets: ["latin"],
  variable: "--font-major",
  weight: "400",
  display: "swap",
});

import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      color-scheme="light dark"
      suppressHydrationWarning
    >
      <head>
        <title>{process.env.NEXT_PUBLIC_TITLE || "SILO"}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="keywords" content="silo note blog" />
        <meta
          name="description"
          content="A minimalist notes/blog created by nxex.js on vercel"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={[major_mono.variable, inter.variable].join(" ")}>
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
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
