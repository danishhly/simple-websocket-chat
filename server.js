

const {WebSocketServer} = require('ws')

const wss = new WebSocketServer({port: 8080});

// 2. Listen for 'connection' event (when a client connects)
wss.on('connection', function connection(ws) {
console.log('New client connected');


// Send a welcome message to the new client
ws.send('Welcome to the chat!');

// Listen for 'message' event (when a client sends data)
ws.on('message', function incoming(data) {
const message = data.toString();
console.log(`Recieved: ${message}`);

// Broadcast the received message to ALL connected clients
wss.clients.foeEach(function each(client) {
// Check if the client is connected and not the sender (
    if (client.readyState == ws.OPEN) {
        client.send(message);
    }
});
});

ws.on('close', () => {
    console.log('Client has disconnected');
});
});
console.log('WebSocket server is running on ws://localhost:8080');
