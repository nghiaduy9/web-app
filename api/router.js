const { Router } = require('express')
const axios = require('axios')

const { WATCH_MANAGER_ADDRESS } = process.env
const router = Router()

router.get('/watch-manager', async (req, res) => {
  try {
    const { data } = await axios.get(WATCH_MANAGER_ADDRESS)
    res.json(data)
  } catch (err) {
    res.sendStatus(500)
  }
})

router.post('/watch-manager', async (req, res) => {
  try {
    const { data } = await axios.post(WATCH_MANAGER_ADDRESS, req.body)
    res.json(data)
  } catch (err) {
    res.sendStatus(500)
  }
})

module.exports = router
