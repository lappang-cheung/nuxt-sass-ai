// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/supabase',
    '@nuxt/icon'
  ],
  // Custom Directories (NuxtJS Docs)
  // https://nuxt.com/docs/guide/directory-structure/components#custom-directories
  components: [
    {
      path: '~/components/shared',
      extensions: ['vue'],
      pathPrefix: false
    },
    {
      path: '~/components/ui',
      extensions: ['vue'],
      pathPrefix: false
    },
     '~/components'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      login: '/auth',
      callback: '/confirm',
      exclude: ['/']
    }
  },
  runtimeConfig: {
    openaiKey: ''
  }
})
