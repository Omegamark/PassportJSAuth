// config/database.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/introToMongoDB');

module.exports = {

  'url' : 'mongodb://localhost:27017/introToMongoDB' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot

};
