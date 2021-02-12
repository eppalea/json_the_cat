const breedSearchPage = 'https://api.thecatapi.com/v1/breeds/search?q=';
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(breedSearchPage + breedName, (error, response, body) => {
    if (error) {
      callback("Sorry, your request has failed", null);
    } else if (body === '[]') {
      callback("This breed is not found", null);
    } else {
      const data = JSON.parse(body); // we use JSON.parse to convert it to an object
      callback(null, data[0].description);
    }
  });
};
 
module.exports = { fetchBreedDescription };











