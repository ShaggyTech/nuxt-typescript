import { Configuration } from '@nuxt/types'

const isDev: boolean = process.env.NODE_ENV !== 'production'

const config: Configuration = {
  verbose: true,
  buildModules: ['@nuxt/typescript-build'],
  dev: isDev,
  plugins: ['~/plugins/composition-api.ts']
  // See https://typescript.nuxtjs.org/guide/setup.html#type-check
  // typescript: {
  //   typeCheck: {
  //     eslint: true
  //   }
  // }
}

export default config
