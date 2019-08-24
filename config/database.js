const dotenv = require('dotenv')

const dbConnection =  'mongodb://localhost:27017/project3'

module.exports = {
  database: dbConnection,
  secret: 'yoursecret'
}
