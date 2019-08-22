const dotenv = require('dotenv')

const dbConnection =  || 'mongodb://localhost:27017/meanauth'

module.exports = {
  database: dbConnection,
  secret: 'yoursecret'
}
