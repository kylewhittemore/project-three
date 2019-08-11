const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://root:123root@ds261567.mlab.com:61567/heroku_b1fvqc7z";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});

module.exports = connection
