var mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/mockRestaurants', { useNewUrlParser: true, useUnifiedTopology: true });
const Restaurant = require('./data.js');

var getRestaurantByID = function(search, callback) {
  var query;
  if (typeof(search) === 'string') {
    //if type is string, query with name
    query = {name: search}
  } else {
    //should query search with uid
    query = {uid: search}
  }
  
  //search with query object
  Restaurant.findOne(query)
    .then((data) => {
      callback(data);
    })
    .catch(err => console.log(err))
    .then(() => {
      mongoose.connection.close();
    }) 
}


// var test = getRestaurantByID('Mendocino Farms', (data) => console.log(data));
// var test = getRestaurantByID(1, (data) => console.log(data));


module.exports = db;

