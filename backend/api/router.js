const { Router } = require('express')
const proxy = require('http-proxy-middleware')

const {
  USER_MANAGER_ADDRESS,
  WATCH_MANAGER_ADDRESS,
  SCHEDULER_ADDRESS,
  CRAWLER_ADDRESS,
  NOTIFICATION_SERVICE_ADDRESS
} = process.env

const router = Router()

router.use(
  '/',
  proxy({
    target: 'http://www.example.org', // this option must be specified, but not used
    router: {
      '/api/user-manager': USER_MANAGER_ADDRESS,
      '/api/watch-manager': WATCH_MANAGER_ADDRESS,
      '/api/scheduler': SCHEDULER_ADDRESS,
      '/api/crawler': CRAWLER_ADDRESS,
      '/api/notification-service': NOTIFICATION_SERVICE_ADDRESS
    },
    changeOrigin: true,
    pathRewrite: {
      '/api/user-manager': '/',
      '/api/watch-manager': '/',
      '/api/scheduler': '/',
      '/api/crawler': '/',
      '/api/notification-service': '/'
    }
  })
)

module.exports = router
