import express from 'express'
import cors from 'cors'
import * as Path from 'node:path'

import cocktails from './routes/cocktails.js'
import * as dotenv from 'dotenv'

const server = express()
server.use(cors({methods:["get","post","put","delete"],origin:'*'}))

dotenv.config()
server.use(express.json())

server.use('/api/v1/cocktails', cocktails)

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const envConfig = dotenv.config()
  if (envConfig.error) throw envConfig.error
}

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
