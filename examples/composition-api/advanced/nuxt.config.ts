import { Configuration } from '@nuxt/types'

import { name, description } from './package.json'

const isDev: boolean = process.env.NODE_ENV !== 'production'

const config: Configuration = {
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
  dev: isDev,
  plugins: ['@/plugins/composition-api.ts']
  // See https://typescript.nuxtjs.org/guide/setup.html#type-check
  // typescript: {
  //   typeCheck: {
  //     eslint: true
  //   }
  // }
}

export default config
