const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    workboxOptions: {
      exclude: ["_redirects"]
    }
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: [
          "/",
          "/about",
          "/gerador-whatsapp",
          "/gerador-de-border-radius"
        ]
      })
    ]
  }
};
