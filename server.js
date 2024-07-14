import fastify from 'fastify'
import { renderToString } from '@vue/server-renderer'
import { createApp } from './dist/server/entry-server.js'
import fastifyStatic from '@fastify/static'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const server = fastify({ logger: true })

server.register(fastifyStatic, {
    root: resolve(__dirname, 'dist/client'),
    prefix: '/'
})

server.setNotFoundHandler(async (request, reply) => {
  const { app, router, pinia } = createApp()

  await router.push(request.url)
  await router.isReady()

  const appContent = await renderToString(app)
  const state = JSON.stringify(pinia.state.value)

  const template = fs.readFileSync(resolve(__dirname, 'dist/client/index.html'), 'utf-8')
  const html = template
    .replace('<!--app-html-->', appContent)
    .replace('<!--pinia-state-->', `<script>window.__INITIAL_STATE__=${state}</script>`)

  reply.type('text/html').send(html)
})

server.listen({ port: 3000 }, (err) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  console.log('Server running on http://localhost:3000')
})