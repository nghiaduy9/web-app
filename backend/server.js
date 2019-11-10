require('dotenv-flow').config()

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const apiRouter = require('./api/router')
const passport = require('passport')
require('./configs/passport')
const rootRouter = require('./router')

const { NODE_ENV, PORT } = process.env

const app = next({
  dev: NODE_ENV !== 'production',
  dir: path.join(__dirname, '..', 'frontend')
})
const handle = app.getRequestHandler()

const main = async () => {
  try {
    const server = express()
    await app.prepare()

    server.use(bodyParser.json())
    server.use(passport.initialize())
    server.use('/api', apiRouter)
    server.use('/', rootRouter)
    server.get('*', (req, res) => handle(req, res))

    server.listen(PORT, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

main()
