const passport = require('passport')
const jwt = require('jsonwebtoken')
const secrets = require('../../../config/secrets')
const User= require('../../../database/models/user')
// import { jwtSecret } from '../../../config/secrets'



module.exports = (req, res, next) => {
    // passport.authenticate('local', {
    //     successRedirect: '/home',
    //     failureRedirect: '/login',
    //     failureFlash: true
    //   })(req, res, next);
      // const username = req.body.username;
      // const password = req.body.password;
      const {username, password} = req.body
      // console.log(`username: ${username} || password: ${password} || req.body: ${JSON.stringify(req)}`)
      // console.log(req)
      // User.getUserByUsername(username, (err, user) => {
      User.findOne( {username}, (err, user) => {
        if(err) throw err;
        if(!user) {
          return res.json({success: false, msg: 'User not found'});
        }
        // console.log(`password: ${password} +++ hash: ${user.password}`)
        User.comparePassword(password, user.password, (err, isMatch) => {
          if(err) throw err;
          if(isMatch){
            // console.log(`config.secret: ${config.secret} || process.env.JWT_SECRET: ${process.env.JWT_SECRET}`)
            // const testSecret

            const token = jwt.sign(user.toJSON(), secrets.jwtSecret, {
              expiresIn: 86400 // 24 hours
            });
    
            res.json({
              success: true,
              token: 'JWT ' + token,
              user: {
                id: user._id,
                username: user.username,
                email: user.email
              }
            });
          } else {
            return res.json({success: false, msg: 'Wrong password'});
          }
        });
      });
}