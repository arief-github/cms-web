export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cms-web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'}
    ],
    script: [
      {
        src: '/js/jquery/jquery.min.js'
      },
      {
        src: '/js/bootstrap/js/bootstrap.bundle.min.js'
      },
      {
        src: '/js/adminlte.min.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fontawesome-free/css/all.min.css',
    '@/assets/css/adminlte.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    'nuxt-multiselect',
    'vue-sweetalert2/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  target: 'server',
  ssr: true,
  axios: {
    baseURL: 'http://localhost:8000'
  },

  auth : {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user'
        },
        endpoints: {
          login: {
            url: '/api/admin/login',
            method: 'post'
          },
          logout: {
            url: '/api/admin/logout',
            method: 'post'
          },
          user: {
            url: '/api/admin/user',
            method: 'get'
          }
        }
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/login',
      home: '/admin/dashboard'
    }
  }
}
