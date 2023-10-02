---
title: Full text search
date: '2023-2-26'
tags:
  - tag
  - webassembly
---

Before using MDX contentlayer, there were many blogs, such as jekyll hexo, and so on. They have a feature that I really like, using tag indexing.

Another blog [forked from waynezhang/blog Tag](https://lhzhang.com/tags.html).

Static pages that can be deployed on Github pages, with some vercel serverless functions.
Full text search preferably offline,except for indexing like jekyll, it can also be used for word segmentation, text similarity search.

There is a game, Disco Elysium, it has a model called the stream of consciousness.which allows players not to need to remember something. When players need it, it will come out on its own.

This is very close to my idea, there is no need to remember what was written, just to write it. When I think of it at a certain moment, the system will calculate the correlation itself.

Unfortunately, I cannot find this modeling method. I copied the full text search from this guy [DawChihLiou](https://github.com/DawChihLiou). The vector similarity search written in Rust.
In 2019, I developed a topology editor using WebAssembly and had a deep impression of it.
His search can temporarily replace Tag. I want to find a way to implement it and then complete my idea.

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
