export default class Client {
  constructor (listener) {
    this._listener = listener
    this._socket = new WebSocket('ws://localhost:8080')

    // Listen for messages
    this._socket.addEventListener('message', e => {
      const reader = new FileReader()
      reader.addEventListener('loadend', e => {
        const text = e.srcElement.result
        listener.update(JSON.parse(text))
      })
      reader.readAsText(e.data)
    })
  }
}
