const passport = require('passport')
const { facebookStrategy, jwtStrategy } = require('../configs/passport')

passport.use(facebookStrategy)
passport.use(jwtStrategy)

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user)
})

module.exports = function(server) {
  server.use(passport.initialize())
}
