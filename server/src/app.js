const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer();
const io = socketIO(server);


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is ready to play on port ${PORT}`);
});