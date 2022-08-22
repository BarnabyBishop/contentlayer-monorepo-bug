import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Component = defineDocumentType(() => ({
  name: "Component",
  contentType: "mdx",
  filePathPattern: "components/**/README.md",
  fields: {
    title: {
      type: "string",
      description: "The title of the component",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the component",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (component) =>
        `/components/${component._raw.flattenedPath.replace("README", "")}`,
    },
  },
}));

export default makeSource({
  contentDirInclude: ["components"],
  contentDirPath: "..",
  documentTypes: [Component],
  onUnknownDocuments: "skip-ignore",
});
