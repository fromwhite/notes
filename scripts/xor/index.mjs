import prettier from 'prettier'
import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs'
import { remark } from 'remark'
import strip from 'strip-markdown'
import { allPosts } from '../../.contentlayer/generated/index.mjs'
import externalPosts from '../../.generated/meta/externalPosts.mjs'

const outdir = '.generated/xor'
const outfilename = 'index.json'

/**
 * Consolidate all articles and generate the index JSON file for full text search WebAssembly module.
 */
async function generate() {
  if (existsSync(outdir)) {
    rmSync(outdir, { recursive: true })
  }

  const originals = allPosts.map((a) => ({
    title: a.title,
    url: `/post/${a.slug}`,
    body: a.body.raw,
  }))
  const externals = externalPosts.map((a) => ({
    title: a.title,
    url: a.url,
    body: a.description,
  }))
  const posts = originals.concat(externals)

  Promise.all(
    posts.map(async (a) => {
      const file = await remark().use(strip).process(a.body)
      return {
        ...a,
        body: String(file),
      }
    })
  )

  const prettierConfig = await prettier.resolveConfig('.prettierrc')

  const formatted = await prettier.format(JSON.stringify(posts), {
    ...prettierConfig,
    parser: 'json',
  })

  mkdirSync(outdir, { recursive: true })

  writeFileSync(`${outdir}/${outfilename}`, formatted)
}

generate()
