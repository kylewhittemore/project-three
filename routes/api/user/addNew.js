const User= require('../../../database/models/user')

module.exports = (req, res) => {

    const { username, password, password2 } = req.body

    if (password != password2) {
        console.log('Passwords do not match');
    }

    User.findOne({username})
        .then(user => {
            if (user) {
                console.log('username already exists');
            } else {
                const newUser = ({
                    username,
                    password
                })

                bcrypt.genSalt(13, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        User.create( newUser )
                            .then(user => {
                                console.log("new user: " + JSON.stringify(user));
                                // res.redirect('/login');
                                res.status(200);
                            })
                            .catch(err => console.log(err));
                        });
                    });
            }
        });
}