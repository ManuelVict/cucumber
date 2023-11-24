class Network {
    constructor() {
      this.listeners = []
    }
  
    subscribe(person) {
      this.listeners.push(person)
    }
  
    broadcast(message) {
      this.listeners.forEach(listener => { listener.hear(message) })
    }
  }
  
  module.exports = {
    Network : Network
  }