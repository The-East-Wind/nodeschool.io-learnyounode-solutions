const fs = require('fs');
const filepath = process.argv[2];
let fileContents = fs.readFileSync(filepath).toString();
console.log(fileContents.split('\n').length-1);