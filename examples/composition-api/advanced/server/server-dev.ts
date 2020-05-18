import chokidar from 'chokidar'
import consola from 'consola'
import { NuxtServer } from '.'

const folderNames = `
  assets
  |components
  |compositions
  |layouts
  |pages
  |plugins
  |server
  |static
  |store
  |types
  |utils
`

const watchPaths = `./+(${folderNames})/**/*.{js,ts,jsx,vue}`

const server = new NuxtServer()

consola.start({
  message: `Starting Nuxt HMR dev server on http://${server.host}:${server.port}`,
  badge: true
})

server.start()

chokidar.watch([watchPaths], {
  ignoreInitial: true
}).on('change', () => {
  server.buildNuxt()
})
