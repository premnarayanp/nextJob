import { WebSocketServer } from 'websocket';

const wss = new WebSocketServer({ port: 8080 });

export const websocketHandler = (c) => {
    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
            // Broadcast message to all connected clients
            wss.clients.forEach(client => {
                if (client.readyState === ws.OPEN) {
                    client.send(message);
                }
            });
        });
    });

    return c.text('WebSocket server is running');
};
