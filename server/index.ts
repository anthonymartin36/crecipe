import server from './server.ts'

const PORT = process.env.PORT || 3000

//import cocktails from './routes/cocktails.js'

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
})
