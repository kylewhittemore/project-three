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
                return res.json({success: false, msg: 'username already used'});
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
                                res.json({
                                    success: true,
                                    user: {
                                      id: user._id,
                                      username: user.username,
                                      email: user.email
                                    }
                                  });
                            })
                            .catch(err => console.log(err));
                        });
                    });
            }
        });
}