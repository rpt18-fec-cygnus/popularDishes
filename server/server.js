const express = require('express');
const app = express();
const port = 7000;
const {getRestaurantByID} = require('../mockData/dbHelper.js')

app.use(express.static('public'));

app.get('/restaurantInfo', (req, res) => {
  // console.log(getRestaurantByID)
  getRestaurantByID(33, (data) => {
    res.send(data);
  })
  // res.send('fake data');
})

app.listen(port, () => console.log(`Cygnus-Yelp App Listening on port ${port}!`));