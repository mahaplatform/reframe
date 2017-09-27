import * as Components from './components'
import * as Containers from './containers'
import * as Controls from './controls'
import * as Utils from './utils'

export default {
  ...Components,
  ...Containers,
  ...Controls,
  ...Utils
}

Object.keys(exports.default).map(key => {
  exports[key] = exports.default[key]
})
