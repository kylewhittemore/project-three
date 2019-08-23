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
    }

})

// userSchema.methods = {
//     checkPassword: function (inputPassword) {
//         return bcrypt.compareSync(inputPassword, this.password)
//     },
//     hashPassword: plainTextPassword => {
//         return bcrypt.hashSync(plainTextPassword, 10)
//     // },
//     // getUserById: function (id) {
//     //     return User.findById(id)
//     // },
//     // getUserByUnsername: function (username) {
//     //     return User.findOne({username})
//     }
// }

// userSchema.pre('save', function (next) {
//     if (!this.password) {
//         console.log('=========no password=========');
//         next();
//     } else {
//         console.log('hashPassword in pre save');
//         this.password = this.hashPassword(this.password)
//         next();
//     }
// })

const User = mongoose.model('User', userSchema)
module.exports = User


module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
  }
  
module.exports.getUserByUsername = (username, callback) => {
    // const query = {username: username}
    User.findOne({username: username})
        .then (dbUser => callback(dbUser))
        // .catch(err => throw err);
  }
  
  module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  }
  
  module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
  }
  