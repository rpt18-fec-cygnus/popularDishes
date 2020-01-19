const db = require('./index.js');
const Restaurant = require('./data.js');

//create sample data here
var mendocinoFarms = {
  name: 'Mendocino Farms',
  uid: 1,
  rating: 4.5,
  reviewCount: 131,
  cost: '$$',
  keyDesc: ['Sandwiches', 'Salad'],
  description: `At Mendocino Farms, we use a fine dining approach to flavor and the freshest Wine Country...`
}
//save sample data into db here
var insertSampleData = function(sampleData) {
  Restaurant.create(sampleData)
    .then(() => db.disconnect())
    .catch(() => db.disconnect());
}
//run seed.js

insertSampleData(mendocinoFarms);

module.exports = insertSampleData;