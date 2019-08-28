const mongoose = require('mongoose')
mongoose.Promise = global.Promise
require('dotenv').config()

// the database that is used is the heroku deployed mongo DB in mLab
// this line can be commented out and re-configured to a local DB for development when appropriate
// const MONGODB_URI = process.env.MONGODB_URI || process.env.LOCAL_MONGODB_URI
// console.log(process.env.LOCAL_MONGODB_URI)
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://root:123root@ds261567.mlab.com:61567/heroku_b1fvqc7z`;
// initiates connection to DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const connection = mongoose.connection;

// once the connection is successfully opened, log a message to the console.
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});

// export the mongoose connection
module.exports = connection
