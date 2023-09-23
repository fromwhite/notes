/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withContentlayer(
  withMDX(
    withBundleAnalyzer({
      experimental: {
        appDir: false,
        mdxRs: true,
      },
      pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
      swcMinify: true,
      reactStrictMode: true,

      webpack: function (config, { isServer }) {
        // wasm support workaround
        // https://github.com/vercel/next.js/issues/25852
        if (isServer) {
          config.output.webassemblyModuleFilename =
            "./../static/wasm/[modulehash].wasm";
        } else {
          config.output.webassemblyModuleFilename =
            "static/wasm/[modulehash].wasm";
        }

        // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
        config.experiments = { asyncWebAssembly: true };

        return config;
      },
    })
  )
);
