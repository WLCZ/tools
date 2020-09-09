// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    workboxOptions: {
      exclude: ["_redirects"]
    }
  }
};
