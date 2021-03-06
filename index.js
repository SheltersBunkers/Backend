const server = require('./server.js');

const port = process.env.PORT || 4001;

const socket = require('socket.io');
const io = socket(server);

io.on('connection', function(socket){
    socket.on('shelter', function(msg) {
        io.emit(`${msg.shelter}`, msg)
    })
    socket.on('typing', function(msg){
        socket.broadcast.emit(`${msg.shelter}/typing`, msg)
    })
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

