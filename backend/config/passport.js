const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

const {FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, FACEBOOK_CALLBACK_URL} = process.env

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: FACEBOOK_CALLBACK_URL,
      profileFields: ['email']
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      done(null, user)
    }
  )
)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    console.log(id)
    done(null, user)
})

module.exports = function() {
  
}