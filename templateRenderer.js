import fs from 'fs'
import { resolve } from 'path'

const templatePath = resolve('index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

export async function resolveTemplate(appHtml, state) {
  const stateScript = `<script>window.__INITIAL_STATE__=${state}</script>`
  return template
    .replace('<!--app-html-->', appHtml)
    .replace('</head>', `${stateScript}</head>`)
}