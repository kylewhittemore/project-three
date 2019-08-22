const User= require('../../../database/models/user')
const bcrypt=require('bcryptjs')

module.exports = (req, res) => {

    const { username, email, password } = req.body

    // if (password != password2) {
    //     console.log('Passwords do not match');
    // }

    User.findOne({username})
        .then(user => {
            if (user) {
                console.log('username already exists');
            } else {
                const newUser = ({
                    username,
                    email,
                    password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        User.create( newUser )
                            .then(user => {
                                console.log("new user: " + JSON.stringify(user));
                                // res.redirect('/');
                                // return user
                            })
                            .catch(err => console.log(err));
                        });
                    });
            }
        });
}