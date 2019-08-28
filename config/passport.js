const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../database/models/user')
// const config = require('./database');
// require('dotenv').config()

module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt")
  opts.secretOrKey = process.env.JWT_SECRET || "mysecret"
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

    console.log (JSON.stringify(jwt_payload))
    User.getUserById( { _id: jwt_payload._id }, (err, user) => {
      if(err){
        return done(err, false)
      }

      if(user){
        return done(null, user)
      } else {
        return done(null, false)
      }
    });
  }));
}
