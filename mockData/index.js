var mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/mockRestaurants', { useNewUrlParser: true, useUnifiedTopology: true });


module.exports = db;

