import {
  defineDocumentType,
  makeSource,
  type ComputedFields,
} from "contentlayer/source-files";

import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from "rehype-pretty-code";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (mdx) => mdx._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "A list of keywords that relate to the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/post/${post._raw.flattenedPath}`,
    },
    ...computedFields,
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
});
