// vue.config.js

module.exports = {
    // options...
    outputDir: process.env.VUE_APP_OUTPUT_DIR ? process.env.VUE_APP_OUTPUT_DIR : 'dist',
    baseUrl: process.env.VUE_APP_BASE_URL ? process.env.VUE_APP_BASE_URL : '/'
  }