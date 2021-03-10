module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/styles.scss";`
      }
    }
  }
};
