export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NIP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/custom.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/apexcharts.js',
    '@/plugins/bootstrap-vue.js',
    '@/plugins/formvalidation.js',
    '@/plugins/highlight-js.js',
    '@/plugins/inline-svg.js',
    '@/plugins/metronic.js',
    '@/plugins/perfect-scrollbar.js',
    '@/plugins/portal-vue.js',
    '@/plugins/treeselect.js',
    '@/plugins/vue-i18n.js',
    '@/plugins/vuetify.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],

  i18n: {
    locales: [
      // Английский язык отключен
      { code: 'en', name: 'English', file: 'us.js', icon: 'USA' },
      { code: 'ru', name: 'Русский', file: 'ru.js', icon: 'Russia' },
    ],
    defaultLocale: 'us',
    strategy: 'no_prefix',
    lazy: false,
    langDir: 'locale/',
    fallbackLocale: 'us',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#0B5AA1',
          accent: '#FFFFFF',
          secondary: '#C4C4C4',
          info: '#F5F8FD',
          warning: '#FEC50C',
          error: '#FF5252',
          yellow: '#FEC50C',
          lightyellow: '#E0FF22',
          light: '#D9DEEC',
          lightgray: '#E4E9F4',
        },
      },
      options: {
        customProperties: true,
      },
    },
    treeShake: true,
  },
};
