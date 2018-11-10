// vue.config.js

console.log(process.env)

// process.env.VUE_APP_BASE_URL ? process.env.VUE_APP_BASE_URL : '/
// outputDir: process.env.VUE_APP_OUTPUT_DIR ? process.env.VUE_APP_OUTPUT_DIR : 'dist',
// baseUrl: '/blah-blah'

module.exports = {
    // options...
    baseUrl: process.env.VUE_APP_BASE_URL ? process.env.VUE_APP_BASE_URL : '/'
  }