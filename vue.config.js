const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const imgRule = config.module.rule("images");
    imgRule
      .test(/\.(gif|png|jpe?g|svg)$/i)
      .use("file-loader")
      .loader("image-webpack-loader")
      .tap((options) => {
        const refactoredOptions = options || {};

        refactoredOptions.mozjpeg = {
          progressive: true,
        };
        refactoredOptions.optipng = {
          enabled: false,
        };
        refactoredOptions.pngquant = {
          quality: [0.65, 0.9],
          speed: 4,
        };
        refactoredOptions.gifsicle = {
          interlaced: false,
        };
        refactoredOptions.webp = {
          quality: 75,
        };

        return refactoredOptions;
      });
  },
});
