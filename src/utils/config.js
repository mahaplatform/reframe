import _ from 'lodash'
import defaultConfig from '../config/defaults'

let globalConfig = _.assign({}, _.cloneDeep(defaultConfig))

export default class Config {
  static load(cfg) {
    globalConfig = _.merge(globalConfig, _.cloneDeep(cfg))
  }

  static overwrite(cfg) {
    globalConfig = _.cloneDeep(cfg)
  }

  static get(item, defaultValue) {
    if(item === '*') {
      return _.cloneDeep(globalConfig)
    }
    return _.get(globalConfig, item, defaultValue)
  }

  static set(path, item) {
    _.set(globalConfig, path, item)
  }
}
