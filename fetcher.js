const request = require('request');
const fs = require('fs');

const URL = process.argv[2];
const filePath = process.argv[3];

request(URL, (error, response, data) => {
if (error) {
  console.log(`Error: ${error}`);
}

  fs.writeFile(filePath, data, (error) => {
    if (error || response.statusCode !== 200) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${filePath}`);
    }  
  }); 
    

});

// console.log(process.argv);
// console.log(filePath);











