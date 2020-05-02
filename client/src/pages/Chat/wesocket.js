import Ws from '@adonisjs/websocket-client';
const host = process.env.REACT_APP_API_URL === 'production' ? window.location.host : 'localhost:3333'

const sw = Ws(`ws://${host}`, {
    path: "ws"
})
sw.connect();
sw.close();
const socket = sw.subscribe('chat');

export default socket;
