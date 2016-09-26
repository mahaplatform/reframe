import _ from 'lodash'

class Config {

  constructor(config) {
    this.config = config[process.env.NODE_ENV]
  }

  get(key) {
    return _.get(this.config, key)
  }

}

// const configurations = require('../../../../../config/config')
// const config = new Config(configurations)
//
// export default config
