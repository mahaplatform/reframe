import config from './config'
import Faye from 'faye'

class Socket {

  constructor() {
    this.client = new Faye.Client(config.get('socket.host')+'/faye')
    this.subscriptions = {}
  }

  subscribe(channel, callback) {
    this.subscriptions[channel] = this.client.subscribe(channel, callback)
  }

  unsubscribe(channel) {
    this.client.unsubscribe(channel, this.subscriptions[channel])
    this.subscriptions.delete(channel)
  }

}

const socket = new Socket()

export default socket
