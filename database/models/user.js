const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.Promise = Promise

const userSchema = new Schema({

    username: { 
        type: String, 
        // I may be mistaken, but I am not sure if adding "unique" here will actually require the username to be unique.  If it is, we should still have authentication prior to submission on the front end. (KW)
        unique: false, 
        required: false 
    },
    password: {
        type: String,
        unique: false,
        required: true
    }

})

userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
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