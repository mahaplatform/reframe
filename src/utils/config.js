import _ from 'lodash'

type configType = {

}

class Config {

  constructor(): void {
    this.config = {}
  }

  load(config: configType): void {
    this.config = config
  }

  get(key: string): any {
    return _.get(this.config, key)
  }

}

const config = new Config()

export default config
