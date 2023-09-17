/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    mdxRs: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer(withMDX(nextConfig));
