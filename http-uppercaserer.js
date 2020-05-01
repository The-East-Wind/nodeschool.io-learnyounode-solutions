const http = require('http');
http.createServer((req,res)=>{
    if(req.method === 'POST'){
        req.setEncoding('utf-8');
        let reqBody = '';
        req.on('data',(data)=>{
            reqBody+=data;
        });
        req.on('end',()=>{
            let reqBodyUpperCase = reqBody.toUpperCase();
            res.writeHead(200,{'content-type':'text/plain'});
            res.end(reqBodyUpperCase);
        });
        req.on('error',console.error);
    }
})
.on('error',console.error)
.listen(process.argv[2]);