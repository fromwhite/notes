/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withContentlayer(
  withMDX(
    withBundleAnalyzer({
      experimental: {
        // appDir: false,
        mdxRs: true,
      },
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
      swcMinify: true,
      reactStrictMode: true,
      basePath: process.env.NODE_ENV === 'production' ? '/notes' || '' : '',

      // https://github.com/vercel/next.js/issues/25852
      // this fix is not permanent, this is just a stopgap solution
      webpack: function (config, { isServer, dev }) {
        if (isServer) {
          config.output.webassemblyModuleFilename =
            './../static/wasm/[modulehash].wasm'
        } else {
          config.output.webassemblyModuleFilename =
            'static/wasm/[modulehash].wasm'
        }
        config.optimization.moduleIds = 'named'
        config.module.rules.push({
          test: /\.wasm$/,
          type: 'webassembly/async',
        })
        config.experiments = {
          asyncWebAssembly: true,
          layers: true,
        }

        return config
      },
    })
  )
)
