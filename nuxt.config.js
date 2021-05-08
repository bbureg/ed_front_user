import webpack from "webpack";

const config = {
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'emoticon_diary',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/reset.css',
    '~assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/axios",
    "@nuxtjs/moment"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
          loader: "file-loader?name=[name].[ext]?[hash]",
        },
      ],
    },
    /*
     ** You can extend webpack config here
     */
    vendor: ["@nuxtjs/axios", "@nuxtjs/moment"],
    transpile: [],

    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        _: "lodash",
      }),
    ],

    extend(config, ctx) { },
  }
};

export default config;
