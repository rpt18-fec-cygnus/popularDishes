const express = require('express');
const app = express();
const port = 7000;

app.use(express.static('public'));

app.get('/', () => {
  res.end();
})

app.listen(port, () => console.log(`Cygnus-Yelp App Listening on port ${port}!`));