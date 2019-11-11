const { Router } = require('express')
const proxy = require('http-proxy-middleware')

const { WATCH_MANAGER_ADDRESS, USER_MANAGER_ADDRESS } = process.env
const router = Router()

const proxyOptions = {
  target: 'http://www.example.org', // this option must be specified, but not used
  router: {
    '/api/watch-manager': WATCH_MANAGER_ADDRESS,
    '/api/user-manager': USER_MANAGER_ADDRESS
  },
  changeOrigin: true,
  pathRewrite: {
    '/api/watch-manager': '/',
    '/api/user-manager': '/'
  }
}

router.use('/', proxy(proxyOptions))

module.exports = router
