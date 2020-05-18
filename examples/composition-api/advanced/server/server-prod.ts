import consola from 'consola'
import { NuxtServer } from '.'

const startProduction = () => {
  consola.start({
    message: 'Starting up production server...',
    badge: true
  })
  const server = new NuxtServer()
  server.start()
}

export default startProduction()
