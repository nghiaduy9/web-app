const passport = require('passport')
const { createNewFacebookStrategy, createNewJwtStrategy } = require('../loaders/passport')

passport.use(createNewFacebookStrategy())
passport.use(createNewJwtStrategy())

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user)
})
