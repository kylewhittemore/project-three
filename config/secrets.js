const dotenv = require('dotenv').config()

// const dbConnection =  'mongodb://localhost:27017/project3'

module.exports = {
  localMongodbUri: process.env.LOCAL_MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  awsAccessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  awsSecretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
}
