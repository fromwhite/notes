/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

class WasmChunksFixPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('WasmChunksFixPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        { name: 'WasmChunksFixPlugin' },
        (assets) =>
          Object.entries(assets).forEach(([pathname, source]) => {
            if (!pathname.match(/\.wasm$/)) return
            compilation.deleteAsset(pathname)

            const name = pathname.split('/')[1]
            const info = compilation.assetsInfo.get(pathname)
            compilation.emitAsset(name, source, info)
          })
      )
    })
  }
}

module.exports = withContentlayer(
  withMDX(
    withBundleAnalyzer({
      experimental: {
        appDir: false,
        mdxRs: true,
      },
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
      swcMinify: true,
      reactStrictMode: true,

      // https://github.com/vercel/next.js/issues/25852
      webpack: function (config, { isServer, dev }) {
        // if (isServer) {
        //   config.output.webassemblyModuleFilename =
        //     './../static/wasm/[modulehash].wasm'
        // } else {
        //   config.output.webassemblyModuleFilename =
        //     'static/wasm/[modulehash].wasm'
        // }
        // config.optimization.moduleIds = 'named'
        // config.module.rules.push({
        //   test: /\.wasm$/,
        //   type: 'webassembly/async',
        // })
        config.experiments = {
          asyncWebAssembly: true,
          layers: true,
        }

        if (!dev && isServer) {
          config.output.webassemblyModuleFilename = 'chunks/[id].wasm'
          config.plugins.push(new WasmChunksFixPlugin())
        }

        return config
      },
    })
  )
)
