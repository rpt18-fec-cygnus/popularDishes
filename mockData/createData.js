const insertSampleData = require('./seed.js');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const faker = require('faker');

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 3,
    min: 1
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

for (var i = 3; i < 20; i++) {
  //lorem ipsum word generation
  var keyDesc = lorem.generateWords(Math.floor(1 + Math.random() * 3)).split(' ')
  var description = lorem.generateParagraphs(Math.floor(1 + Math.random() * 2));
  var companyName = faker.company.companyName();
  var score = 3 + Math.round((Math.random() * 2 * 10))/10;
  var cost = ['$', '$$', '$$$', '$$$$'][Math.floor(Math.random()*3)];
  var reviewCount = Math.floor(Math.random() * 1000);
  
  var mockRestaurant = {
    name: companyName,
    uid: i,
    rating: score,
    reviewCount: reviewCount,
    cost: cost,
    keyDesc: keyDesc,
    description: description
  }


  //save each to database
  
}