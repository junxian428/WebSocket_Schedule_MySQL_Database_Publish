const WebSocket = require('ws');

const socket = new WebSocket('ws://localhost:8088/user');

socket.on('open', () => {
  console.log('Connected to WebSocket server');
  // You can send a test message once the connection is established
  socket.send('{"user": "NODEJS?"}, {"message": "NODEJS"}');
});

socket.on('message', (message) => {
  console.log('Received message:', message);
  console.log('Received message:' +  hexToString(message));
});


function hexToString(str)
{
    const buf = new Buffer(str, 'hex');
    return buf.toString('utf8');
}

socket.on('close', () => {
  console.log('WebSocket connection closed');
});
