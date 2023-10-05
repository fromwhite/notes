---
title: Full-text search
date: '2023-2-26'
tags:
  - tag
  - webassembly
---

Before using MDX contentlayer, there were many blogs, such as jekyll hexo, and so on. They have a feature that I really like, which is using tag indexing.

Another blog [forked from waynezhang/blog Tag](https://lhzhang.com/tags.html).

Static pages can be deployed on Github and use vercel serverless as the backend.
Full-text search is best done offline. In addition to indexing like jekyll, it can also be used for word segmentation and text similarity search.

There is a game, Disco Elysium, that has a model called stream of consciousness that allows players to play without having to remember things. When the player needs it, it will come out on its own.

This is pretty close to what I was thinking, no need to remember what you wrote, just write. When I think of it at some point, the system calculates the correlation itself.

Unfortunately, I can't find a way to implement this idea. I copied the full-text search of this person [DawChihLiou](https://github.com/DawChihLiou). Vector similarity search written in Rust.
In 2019, I developed a topology editor using WebAssembly and was very impressed by it.
His search can temporarily replace Tag. I hope to find a way to achieve it, to be continued.

```

          Build-Time                        Run-Time

    +-------------------+                +------------+
    | Contentlayer Data |                | User Input |
    +-------------------+                +------------+
              |                                |
           generate                 call wasm.search(query)
              |                                |
      +---------------+                +---------------+
      | Article Index |                | Query String  |
      +---------------+                +---------------+
              |                                |
          construct                         tokenize
              |                                |
+----------------------------+          +--------------+
| Vec<(Article, Xor Filter)> |          | Search Terms |
+----------------------------+          +--------------+
              |                                |
          serialize                            |
              |                                |
       +-------------+                         |
       | storage.txt | - deserialize ------> score
       +-------------+                         |
                                   +-----------------------+
                                   | Vec<(Article, Score)> |
                                   +-----------------------+
                                               |
                                              rank
                                               |
                                   +-----------------------+
                                   | Vec<(Article, Score)> |
                                   +-----------------------+
                                               |
                                             take(n)
                                               |
                                        +--------------+
                                        | Vec<Article> |
                                        +--------------+
                                               |
                                             return
                                               |
                                        +--------------+
                                        | Vec<Article> |
                                        +--------------+
                                               |
                                            display
                                               |
                                       +---------------+
                                       | Search Result |
                                       +---------------+
```
