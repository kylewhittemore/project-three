const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.Promise = Promise

const userSchema = new Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    grows: [
        {
            type: Schema.Types.ObjectId,
            ref: "Grow"
        }
    ]

})

userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
        // },
        // getUserById: function (id) {
        //     return User.findById(id)
        // },
        // getUserByUnsername: function (username) {
        //     return User.findOne({username})
    }
}

userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('=========no password=========');
        next();
    } else {
        console.log('hashPassword in pre save');
        this.password = this.hashPassword(this.password)
        next();
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User