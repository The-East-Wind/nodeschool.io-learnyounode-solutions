const http = require('http');
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
const queue = {};
myEmitter.on('data',(url,data)=>{
    queue[url]= data;
    if(Object.keys(queue).length === (process.argv.length - 2)){
        console.log(queue[process.argv[2]]);
        console.log(queue[process.argv[3]]);
        console.log(queue[process.argv[4]]);
    }
});
http.get(process.argv[2],(res)=>{
    res.setEncoding('utf-8');
    let completeData = '';
    res.on('data',(data)=>{
        completeData+=data;
    });
    res.on('error',console.error);
    res.on('end',()=>{
        myEmitter.emit('data',process.argv[2],completeData);
    });
}).on('error',console.error);

http.get(process.argv[3],(res)=>{
    res.setEncoding('utf-8');
    let completeData = '';
    res.on('data',(data)=>{
        completeData+=data;
    });
    res.on('error',console.error);
    res.on('end',()=>{
        myEmitter.emit('data',process.argv[3],completeData);
    });
}).on('error',console.error);

http.get(process.argv[4],(res)=>{
    res.setEncoding('utf-8');
    let completeData = '';
    res.on('data',(data)=>{
        completeData+=data;
    });
    res.on('error',console.error);
    res.on('end',()=>{
        myEmitter.emit('data',process.argv[4],completeData);
    });
}).on('error',console.error);
