import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const docs = defineDocs({
  docs: {
    async: true,
  },
});

export default defineConfig();
