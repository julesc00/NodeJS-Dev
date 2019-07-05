const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data);
// console.log(data.title);

// Challenge: Work with JSON and the file system
// 1. Load and parse the JSON data
// 2. Change the name and age property using my info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON
const dataBuffer = fs.readFileSync('1-json.json');
let dataJSON = dataBuffer.toString();
let data = JSON.parse(dataJSON);
data.name = 'Julio';
data.age = 43;

dataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJSON)
console.log(data);