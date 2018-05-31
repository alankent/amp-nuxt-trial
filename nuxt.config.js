const pkg = require('./package')

const modifyHtml = (html) => {

  // TODO: Is this the right way? We need to join the elements as well. Do via WebPack config instead?
  // Add amp-custom tag to added CSS
  html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  //html = html.replace(/<style type="text\/css"/g, '<style amp-custom type="text/css"')
  

  // TODO: Hacky - join multiple adjacent style elements together
  html = html.replace(/<\/style><style amp-custom[^>]*>/g, '')

  // TODO: Better to throw an error than secretly discard?
  // Remove every script tag from generated HTML
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')

  return html
}

module.exports = {

  // We want server side rendering.
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      //AJK: Moved to app.html { charset: 'utf-8' },
      //AJK: Moved to app.html { name: 'viewport', content: 'width=device-width,minimum-scale=1' },
      //AJK: { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      //AJK: { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // TODO: Canonical URL should be "self", whatever the current URL is (not always the root)
      { rel: 'canonical', href: '/' }, // Wrong!
      //AJK: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },

  /*
  ** Disable loading bar since AMP will not generate a dynamic page.
  */
  loading: false,

  render: {
    // Disable resourceHints since we don't laod any scripts for AMP
    resourceHints: false
  },

  // TODO: Delete? We don't want any global CSS.
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  hooks: {
    // This hook is called before generatic static html files for SPA mode
    'generate:page': (page) => {
      page.html = modifyHtml(page.html)
    },
    // This hook is called before rendering the html to the browser
    'render:route': (url, page, { req, res }) => {
      page.html = modifyHtml(page.html)
    }
  }
}
