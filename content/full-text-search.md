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

There is a game, Disco Elysium, that has a model called stream of consciousness, which allows players to play the game without having to remember things. When the player thinks of a part, it will find the complete part.

This is pretty close to my idea, I don’t need to remember the specific content. When I remember a fragment of it, the model will figure out the associated complete part on its own.

Unfortunately, I can't find a way to implement this idea. I copied the full-text search of this guy's [DawChihLiou](https://github.com/DawChihLiou). Vector similarity search written in Rust.
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
