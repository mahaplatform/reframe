import _ from 'lodash'


class Config {

  constructor() {
    this.config = {}
  }

  load(config) {
    this.config = config
  }

  get(key) {
    return _.get(this.config, key)
  }

}

const config = new Config()

export default config
