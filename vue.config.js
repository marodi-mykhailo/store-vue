module.exports = {
  publicPath: "https://marodi-mykhailo.github.io/store-vue/",
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/styles.scss";`
      }
    }
  }
};
