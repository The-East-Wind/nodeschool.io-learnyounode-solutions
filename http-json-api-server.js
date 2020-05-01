const http = require('http');
http.createServer((req,res)=>{
    if(req.method === 'GET'){
        const reqUrl = new URL(req.url,'http://localhost:'+process.argv[2]);
        let dateAndTime = new Date(reqUrl.searchParams.get('iso'));
        let data = {};
        if(reqUrl.pathname === '/api/parsetime'){
            data = JSON.stringify({
                "hour": dateAndTime.getHours(),
                "minute": dateAndTime.getMinutes(),
                "second": dateAndTime.getSeconds()
            });
        }
        if(reqUrl.pathname === '/api/unixtime'){
            data = JSON.stringify({"unixtime": dateAndTime.valueOf()});
        }
        res.writeHead(200,{'content-type': 'application/json'});
        res.end(data);
    }
})
.on('error',console.error)
.listen(process.argv[2]);