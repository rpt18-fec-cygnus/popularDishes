const Restaurant = require('./data.js');
const db = require('./index.js')

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

module.exports = {getRestaurantByID}
  
  // var test = getRestaurantByID('Mendocino Farms', (data) => console.log(data));  
  // var test = getRestaurantByID(1, (data) => console.log(data));

