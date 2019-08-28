const dotenv = require('dotenv').config()

// const dbConnection =  'mongodb://localhost:27017/project3'

module.exports = {
//   database: dbConnection,
  jwtSecret: process.env.JWT_SECRET
}
