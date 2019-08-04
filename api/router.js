const { Router } = require('express')

const { WATCH_MANAGER_ADDRESS } = process.env
const router = Router()

router.all('/watch-manager', (req, res) => res.redirect(WATCH_MANAGER_ADDRESS))

module.exports = router
