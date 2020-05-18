import express from 'express'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt-edge'

import config from '../nuxt.config'
import { PORT } from './'

export class NuxtServer {
  app: any;
  builder: any;
  host: any;
  nuxt: any;
  port: number;
  started: boolean;

  constructor (port?: number) {
    const nuxt_ = new Nuxt(config)

    this.app = express()
    this.nuxt = nuxt_
    this.builder = new Builder(this.nuxt)
    this.host = this.nuxt.options.server.host
    this.port = port || PORT
    this.started = false
  }

  async buildNuxtDev () {
    await this.builder.build()
  }

  async start () {
    await this.nuxt.ready()

    // Build only in dev mode
    if (config.dev) {
      await this.buildNuxtDev()
    }

    // Only start the server one time
    if (!this.started) {
      // Give nuxt middleware to express
      this.app.use(this.nuxt.render)

      // Listen to the server
      this.app.listen(this.port, this.host)
      consola.ready({
        message: `Server listening on http://${this.host}:${this.port}`,
        badge: true
      })

      this.started = true
    } else {
      consola.ready({
        message: `Server listening on http://${this.host}:${this.port}`,
        badge: true
      })
    }
  }
}
