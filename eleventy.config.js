import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Rewrites root-relative URLs when the site is built with --pathprefix
  // (needed only while it is served from username.github.io/repository/).
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ public: "/" });

  // Every page uses the shared chrome unless its front matter says otherwise.
  eleventyConfig.addGlobalData("layout", "layout.njk");
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
  },
  // Pages are plain HTML; only the layout is a template.
  htmlTemplateEngine: false,
};
