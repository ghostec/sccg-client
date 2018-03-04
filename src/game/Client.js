export default class Client {
  constructor() {
    this._socket = new WebSocket('ws://localhost:8080')

    // Listen for messages
    this._socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data)
    })
  }
}
