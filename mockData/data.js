const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  uid: {
    type: Number
  },
  rating: {
    type: Number
  },
  reviewCount: {
    type: Number
  },
  cost: {
    type: String
  },
  keyDesc: {
    type: [String]
  },
  description: {
    type: String
  }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)


module.exports = Restaurant;