const User = require('../database/models/user');
const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcryptjs');

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	(username, password, done) => {
		User.findOne({ username: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy

// passport.serializeUser(function(user, done) {
// 	done(null, user.id);
// });

// passport.deserializeUser( function(id, done) {
// 	db.Client.findByPk(id).then(function(client) {
// 		done(null, client);
// 	});
// });