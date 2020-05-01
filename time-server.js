const net = require('net');
const getDateTime = ()=>{
    let date = new Date();
    return date.toISOString().split('T')[0]+' '+date.getHours()+':'+(date.getMinutes()>9?'':'0')+date.getMinutes();
}
const server = net.createServer((socket)=>{
    socket.write(getDateTime());
    socket.end('\n');
});
server.listen(process.argv[2]);