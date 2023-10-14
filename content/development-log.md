---
title: Development Log
date: '2017-2-22'
tags:
  - dev
---

## Date: [2023/10/11]

- [x] Back up master branch
- [x] Deploy the branch to vercel
- [x] Deploy static branches to github pages
- [x] Add a document branch to process md files separately

### Issues and Challenges

- The current dilemma,Serverless Functions on Vercel are stateless and have a maximum execution duration. As a result, it is not possible to maintain a long connection to a Serverless Function
- After registration is completed, nextauth signin cannot be used to automatically update the session
- Cloudflare new worker released

### Next Steps

- Work on another product,a library compatible with webgl2 and webgpu and provide wasm ffi

---

## Date: [2023/9/23]

### Progress Updates

- [x] tRPC
- [x] WebAuthn
- [x] Invite-only registration
- [x] reCAPTCHA => cloudflare turnstile

### Issues and Challenges

- WebAuthn has limited meaning in my case
- Simple invitation-based registration. Only administrators can invite. The invitees will receive an email and use the email link to complete the registration

### Next Steps

- reCAPTCHA
- webrtc

---

## Date: [2023/7/20]

### Progress Updates

- [x] weekly writing
- [x] build new notes by MDX and MD

### Issues and Challenges

- No design, need to adjust style

### Decisions and Changes

- Decided to adopt contentlayer to render mdx
- Demote nextjs to pages
- Copy a full-text search, which is somewhat different now

### Testing and Quality Assurance

- Boundary testing, first create the page

### Next Steps

- Complete development of remaining features
- Perform performance optimization and code review
- Prepare test release of Version tRPC

---

## Date: [2017～2019]

- [x] Another blog, [forked from waynezhang/blog](https://github.com/fromwhite/blog.bak)
- [x] Building a blog using WordPress
- [x] Reading and writing is my hobby
