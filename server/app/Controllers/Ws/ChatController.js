'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
  onMessage (message) {
    this.socket.broadcast('message',message)
    console.log(this.socket.id);
   console.log(message);

  }
}

module.exports = ChatController
