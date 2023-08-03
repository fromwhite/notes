/** @type {import('next').NextConfig} */

const rehypePrettyCode = require("rehype-pretty-code");

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer(withMDX(nextConfig));
