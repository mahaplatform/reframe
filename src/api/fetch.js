import API from './index'

export default function fetch(url, options, client) {
  const api = new API(client)
  return api.loadJSON(url, options)
}
