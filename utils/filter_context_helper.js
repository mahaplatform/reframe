'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterContextEnhancer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _filter_context = require('./filter_context.js');

var _filter_context2 = _interopRequireDefault(_filter_context);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterContextHelper = function () {
  function FilterContextHelper() {
    _classCallCheck(this, FilterContextHelper);
  }

  _createClass(FilterContextHelper, null, [{
    key: 'wrap',
    value: function wrap(FC) {
      // Make sure the FC isn't already wrapped
      if (FC.__enhanced__ === true) {
        return FC;
      } else {
        return new FilterContextEnhancer(FC);
      }
    }
  }, {
    key: 'toQueryParams',
    value: function toQueryParams(FC) {
      return this.wrap(FC).toQueryParams();
    }
  }, {
    key: 'toQueryString',
    value: function toQueryString(FC) {
      return this.wrap(FC).toQueryString();
    }
  }, {
    key: 'fromQueryString',
    value: function fromQueryString(str) {
      var loc = _history2.default.createLocation('/admin' + str);
      return FilterContextHelper.fromQueryParams(loc.query);
    }
  }, {
    key: 'fromQueryParams',
    value: function fromQueryParams(qp) {
      var sort = qp.sort;
      var fields = qp.fields;

      var query = _objectWithoutProperties(qp, ['sort', 'fields']);

      var nfc = new _filter_context2.default({
        sort: (0, _lodash2.default)(sort).thru(function (sort) {
          if (!sort) {
            return {};
          }
          if (_lodash2.default.startsWith('-', sort)) {
            return _defineProperty({}, sort.slice(1), 'desc');
          } else {
            return _defineProperty({}, sort, 'asc');
          }
        }).value(),
        fields: fields ? fields.split(',') : [],
        query: query
      });
      return new FilterContextEnhancer(nfc);
    }
  }, {
    key: 'areEquivalent',
    value: function areEquivalent(FC1, FC2) {
      return FC1.sortId() === FC2.sortId();
    }
  }, {
    key: 'clone',
    value: function clone(FC) {
      if (FC.__enhanced__ === true) {
        return FC.clone();
      } else {
        return this.wrap(FC).clonePlain();
      }
    }
  }]);

  return FilterContextHelper;
}();

exports.default = FilterContextHelper;

var FilterContextEnhancer = exports.FilterContextEnhancer = function () {
  function FilterContextEnhancer(FC) {
    _classCallCheck(this, FilterContextEnhancer);

    this.fc = FC;
    this.__enhanced__ = true;
  }

  _createClass(FilterContextEnhancer, [{
    key: 'toQueryParams',
    value: function toQueryParams() {
      var qp = _lodash2.default.omit(this.fc.query || {}, _lodash2.default.isNull);
      // sort[key]=display_name&sort[order]=asc
      if (!_lodash2.default.isEmpty(this.fc.sort)) {
        qp['sort'] = _lodash2.default.map(this.fc.sort, function (ord, field) {
          switch (ord.toLowerCase()) {
            case 'desc':
              return '-' + field;
              break;

            case 'asc':
              return '' + field;
              break;
          }
        }).join(',');
      }

      function emptyValues(val) {
        if (_lodash2.default.isArray(val) || _lodash2.default.isPlainObject(val)) {
          return _lodash2.default.isEmpty(val);
        } else if (_lodash2.default.isNumber(val)) {
          return val === 0;
        } else {
          return val == null;
        }
      }

      var reduc = (0, _lodash2.default)(this.fc).pick(['fields', 'skip', 'limit']).omitBy(emptyValues).mapKeys(function (val, key) {
        return _lodash2.default.snakeCase(key);
      }).merge(qp).value();

      return reduc;
    }
  }, {
    key: 'toQueryString',
    value: function toQueryString() {
      var qp = this.toQueryParams();
      var qstring = _lodash2.default.map(qp, function (value, parameter) {
        return parameter + '=' + encodeURIComponent(value);
      });
      return qstring.join('&');
    }
  }, {
    key: 'equivalentTo',
    value: function equivalentTo(otherContext) {
      return otherContext.sortId() === this.fc.sortId();
    }
  }, {
    key: 'clone',
    value: function clone() {
      var cfc = this.clonePlain();
      return FilterContextHelper.wrap(cfc);
    }
  }, {
    key: 'clonePlain',
    value: function clonePlain() {
      return new _filter_context2.default(_lodash2.default.cloneDeep(this.fc));
    }
  }, {
    key: 'sortId',
    get: function get() {
      return this.fc.sortId();
    }
  }, {
    key: 'asQuery',
    get: function get() {
      return this.toQueryParams();
    }
  }, {
    key: 'asQueryString',
    get: function get() {
      return this.toQueryString();
    }

    // Getters

  }, {
    key: 'name',
    get: function get() {
      return this.fc.name;
    },


    // Setters

    set: function set(name) {
      this.fc.name = name;
    }
  }, {
    key: 'sort',
    get: function get() {
      return this.fc.sort;
    },
    set: function set(sort) {
      this.fc.sort = sort;
    }
  }, {
    key: 'fields',
    get: function get() {
      return this.fc.fields;
    },
    set: function set(fields) {
      this.fc.fields = fields;
    }
  }, {
    key: 'order',
    get: function get() {
      return this.fc.order;
    },
    set: function set(order) {
      this.fc.order = order;
    }
  }, {
    key: 'compound',
    get: function get() {
      return this.fc.compound;
    },
    set: function set(compound) {
      this.fc.compound = compound;
    }
  }, {
    key: 'query',
    get: function get() {
      return this.fc.query;
    },
    set: function set(query) {
      this.fc.query = query;
    }
  }]);

  return FilterContextEnhancer;
}();