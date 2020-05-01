const fs = require('fs');
fs.readFile(process.argv[2],'utf-8',(err,contents)=>{
    if(err) return console.error(err);
    console.log(contents.split('\n').length-1);
});