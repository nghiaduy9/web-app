const { Router } = require('express')
const axios = require('axios')
const passport = require('passport')
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

router.get('/watch-manager', passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
    const { data } = await axios.get(WATCH_MANAGER_ADDRESS)
    res.json(data)
  } catch (err) {
    res.sendStatus(500)
  }
})

router.post('/watch-manager', passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
    const { data } = await axios.post(WATCH_MANAGER_ADDRESS, req.body)
    res.json(data)
  } catch (err) {
    res.sendStatus(500)
  }
})

module.exports = router
