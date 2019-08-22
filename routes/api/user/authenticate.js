const passport = require('passport');
const User= require('../../../database/models/user')

module.exports = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/login',
        failureFlash: true
      })(req, res, next);
}