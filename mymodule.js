const fs = require('fs');
const path = require('path');
module.exports = (filepath,filter,done)=>{
    fs.readdir(filepath,(err,list)=>{
        if(err) return done(err);
        list = list.filter(file=>{
            return path.extname(file) === '.'+filter;
        });
        done(null,list);
    });
}