const breedSearchPage = 'https://api.thecatapi.com/v1/breeds/search?q=';
const catNameInCL = process.argv[2];

const request = require('request');

/**
 * hard coded example to understand the code
 */
// const siberian = 'https://api.thecatapi.com/v1/breeds/search?q=sib';
// request(siberian, (error, response, body) => {
//   // console.log('error:', error); // Print the error if one occurred
//   // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   // console.log('body:', body); // Print the HTML for the requested domain.
//   // console.log(typeof body); // this is a string
//   const data = JSON.parse(body); // we use JSON.parse to convert it to an object
//   // console.log(data);
//   // console.log(typeof data); // now we can see it's an object
//   console.log(data[0].description); //accessing the first entry in the data array, and printing out the description
// });


request(breedSearchPage + catNameInCL, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the requested domain.
  if (error) {
    console.log('The error is: ', error);
  } else if (body === '[]') {
    // console.log(typeof body); // this is a string
    console.log('This breed is not found');
  } else {
    const data = JSON.parse(body); // we use JSON.parse to convert it to an object
    // console.log(data);
    // console.log(typeof data); // now we can see it's an object
    console.log(data[0].description); //accessing the first entry in the data array, and printing out the description
  }
});












