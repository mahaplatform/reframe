import _ from 'lodash'

const appDefaults = {
}

let globalConfig = {}

export default class Config {
  static load(cfg) {
    globalConfig = _.cloneDeep(cfg)
  }

  static get(item, defaultValue) {
    return _.get(globalConfig, item, defaultValue)
  }

  static set(path, item) {
    _.set(globalConfig, path, item)
  }
}
