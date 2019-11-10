const { Router } = require('express')
const axios = require('axios')
const passport = require('passport')

const { WATCH_MANAGER_ADDRESS } = process.env
const router = Router()

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

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }))
router.get(
  '/auth/facebook/cb',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    successRedirect: '/',
    session: false
  })
)

module.exports = router
