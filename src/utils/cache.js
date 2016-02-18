import _ from 'lodash'
import {diceroll} from 'utils/random'

/**
 * Global caching utility
 */
class Cache {

  /**
   * Create the cache k/v container
   * @return {Cache} Constructed Cache
   */
  constructor() {
    this.store = []
    this.sweepChance = 10
  }

  /**
   * Fetch a cached value by key
   * @param  {string} key key to Fetch
   * @return {any}     Returned value
   */
  get(key) {
    const valueIndex = _.findIndex(this.store, {_key: key})
    if(valueIndex < 0) { this.sweep(); return null }

    let {_key, _expire, data } = this.store[valueIndex]
    let result

    if(_expire === Infinity) { result = data }
    if(_expire <= Date.now()) {
      result = null
    }
    else {
      result = data
    }
    this.sweep()
    return result
  }

  /**
   * Set a value for a key
   * @param {string} key    the key to Set
   * @param {any} data   the data to associate with the key
   * @param {number} expire future Unix timestamp at which to invalidate the key
   */
  set(key, data, expire = Infinity) {
    const idx = _.findIndex(this.store, {_key: key})
    let expireAt = expire
    if(expire !== Infinity) {
      expireAt = Date.now() + expire * 1000
    }
    if(idx >= 0) {
      this.store[idx] = {_key: key, _expire: expireAt, data: _.cloneDeep(data)}
    }
    else {
      this.store.push({_key: key, _expire: expireAt, data: _.cloneDeep(data)})
    }
    this.sweep()
  }

  /**
   * Check whether the cache contains a given key
   * @param  {string}  key Key to check form
   * @return {Boolean}     Whether or not the cache contains this key
   */
  has(key) {
    let idx = _.findIndex(this.store, {_key: key})
    let isFresh = idx >= 0 ? this.store[idx]._expire >= Date.now() : false
    this.sweep()
    return isFresh
  }

  /**
   * Empties out the cache
   * @return {undefined}
   */
  clear() {
    this.store = []
  }

  /**
   * Sweep out expired items according to the sweep chance. Only sweeps
   * <this.sweepChance> percent of the time. Called after every other
   * method.
   * @return {undefined}
   */
  sweep() {
    if(diceroll(this.sweepChance)) {
      const relDate = Date.now()
      _.remove(this.store, i => _.get(i, '_expire', Infinity) <= relDate )
    }
  }
}

// window.Cache = new Cache()

export default new Cache()
