const db = require('./index.js');
const Restaurant = require('./data.js');

//save sample data into db here
var insertSampleData = function(sampleData) {
  // Restaurant.create(sampleData)
  //   .then(() => db.disconnect())
  //   .catch(() => db.disconnect());
  var restaurant = new Restaurant(sampleData);
  restaurant.save((err, data) => {
    if (err){return console.error(err)}
    console.log(data);
  })
}
//run seed.js

// insertSampleData(mendocinoFarms);

module.exports = insertSampleData;