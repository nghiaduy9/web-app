const { Router } = require('express')
const passport = require('passport')

const router = Router()

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }))

router.get(
  '/auth/facebook/cb',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    successRedirect: '/dashboard',
    session: false
  })
)

module.exports = router
