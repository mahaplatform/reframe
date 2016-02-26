'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _random = require('./random');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Global caching utility
 */

var Cache = function () {

  /**
   * Create the cache k/v container
   * @return {Cache} Constructed Cache
   */

  function Cache() {
    _classCallCheck(this, Cache);

    this.store = [];
    this.sweepChance = 10;
  }

  /**
   * Fetch a cached value by key
   * @param  {string} key key to Fetch
   * @return {any}     Returned value
   */


  _createClass(Cache, [{
    key: 'get',
    value: function get(key) {
      var valueIndex = _lodash2.default.findIndex(this.store, { _key: key });
      if (valueIndex < 0) {
        this.sweep();return null;
      }

      var _store$valueIndex = this.store[valueIndex];
      var _key = _store$valueIndex._key;
      var _expire = _store$valueIndex._expire;
      var data = _store$valueIndex.data;

      var result = undefined;

      if (_expire === Infinity) {
        result = data;
      }
      if (_expire <= Date.now()) {
        result = null;
      } else {
        result = data;
      }
      this.sweep();
      return result;
    }

    /**
     * Set a value for a key
     * @param {string} key    the key to Set
     * @param {any} data   the data to associate with the key
     * @param {number} expire future Unix timestamp at which to invalidate the key
     */

  }, {
    key: 'set',
    value: function set(key, data) {
      var expire = arguments.length <= 2 || arguments[2] === undefined ? Infinity : arguments[2];

      var idx = _lodash2.default.findIndex(this.store, { _key: key });
      var expireAt = expire;
      if (expire !== Infinity) {
        expireAt = Date.now() + expire * 1000;
      }
      if (idx >= 0) {
        this.store[idx] = { _key: key, _expire: expireAt, data: _lodash2.default.cloneDeep(data) };
      } else {
        this.store.push({ _key: key, _expire: expireAt, data: _lodash2.default.cloneDeep(data) });
      }
      this.sweep();
    }

    /**
     * Check whether the cache contains a given key
     * @param  {string}  key Key to check form
     * @return {Boolean}     Whether or not the cache contains this key
     */

  }, {
    key: 'has',
    value: function has(key) {
      var idx = _lodash2.default.findIndex(this.store, { _key: key });
      var isFresh = idx >= 0 ? this.store[idx]._expire >= Date.now() : false;
      this.sweep();
      return isFresh;
    }

    /**
     * Empties out the cache
     * @return {undefined}
     */

  }, {
    key: 'clear',
    value: function clear() {
      this.store = [];
    }

    /**
     * Sweep out expired items according to the sweep chance. Only sweeps
     * <this.sweepChance> percent of the time. Called after every other
     * method.
     * @return {undefined}
     */

  }, {
    key: 'sweep',
    value: function sweep() {
      var _this = this;

      if ((0, _random.diceroll)(this.sweepChance)) {
        (function () {
          var relDate = Date.now();
          _lodash2.default.remove(_this.store, function (i) {
            return _lodash2.default.get(i, '_expire', Infinity) <= relDate;
          });
        })();
      }
    }
  }]);

  return Cache;
}();

// window.Cache = new Cache()

exports.default = new Cache();