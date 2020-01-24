var mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/mockRestaurants', { useNewUrlParser: true, useUnifiedTopology: true });
const Restaurant = require('./data.js');

var getRestaurantByID = function(uid, callback) {
  Restaurant.findOne({ uid: uid})
    .then((data) => {
      callback(data);
    })
    .catch(err => console.log(err))
    .then(() => {
      mongoose.connection.close();
    })
  
  // Restaurant.find({ uid: uid}, (err, data) => {
  //   if (err) {return err}
  //   mongoose.connection.close();
  //   return data;
    
  // });
}

var test = getRestaurantByID(1, (data) => console.log(data.name));
var getRestaurantName = function(uid) {

}






module.exports = db;

