const User = require('../database/models/user')

module.exports = (req, res) => {
   
    console.log('user signup')
    const { username, password } = req.body
   
    User.findOne({ username: username }, (err, user) => {
        if (err) { console.log('user.js post error: ', err) }
        else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        } else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })

}