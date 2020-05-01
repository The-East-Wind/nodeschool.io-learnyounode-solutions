const http = require('http')
http.get(process.argv[2],(res)=>{
    res.setEncoding('utf-8');
    let dataString = '';
    res.on('data',(data)=>{
        dataString+=data;
    });
    res.on('end',()=>{
        console.log(dataString.length);
        console.log(dataString);
    });
    res.on('error',console.error);
}).on('error',console.error);