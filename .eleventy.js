module.exports = function(eleventyConfig) {
  // CSSなどの静的ファイルをそのまま出力するための設定
  eleventyConfig.addPassthroughCopy("style.css");

  // 【追加】imagesフォルダをそのままコピーする設定
  eleventyConfig.addPassthroughCopy("images");

  return {
    pathPrefix: "/iris-pedia/",
    dir: {
      input: ".",
      output: "docs" // 完成したサイトが書き出される場所
    }
  };
};