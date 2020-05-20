import { Configuration } from '@nuxt/types'

import { name, description } from './package.json'

const isDev: boolean = process.env.NODE_ENV !== 'production'

const config: Configuration = {
  dev: isDev,
  head: {
    titleTemplate: '%s - ',
    title: name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [
    '@/assets/css/main.css'
  ],
  buildModules: ['@nuxt/typescript-build'],
  plugins: ['@/plugins/composition-api.ts']
  // See https://typescript.nuxtjs.org/guide/setup.html#type-check
  // Uncomment below to use it
  /***************
  typescript: {
    typeCheck: {
    eslint: true
    }
  }
  ***************/
}

export default config
