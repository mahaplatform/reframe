'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ASC = Symbol('ascending');
var DESC = Symbol('descending');
var COMPOUND = Symbol('Compound sort');
var SIMPLE = Symbol('Simple sort');

function toSymbol(str) {
  switch (str.uppercase()) {
    case 'ASC':
      return ASC;
    case 'DESC':
      return DESC;
    case 'COMPOUND':
      return COMPOUND;
    case 'SIMPLE':
      return SIMPLE;
    default:
      return null;
  }
}

var defaultInitialState = {
  fields: [],
  sort: {},
  order: DESC,
  compound: false,
  query: {}
};

function idWithOmissions(ctx) {
  function reduceId(ofObject) {
    return (0, _lodash2.default)(ofObject).keys().sortBy().map(function (key, index, collection) {
      if (_lodash2.default.isArray(ofObject[key])) {
        if (_lodash2.default.isEmpty(ofObject[key])) {
          return [key, ''];
        }
        return [key, _lodash2.default.sortBy(ofObject[key])];
      } else if (_lodash2.default.isObject(ofObject[key])) {
        if (_lodash2.default.isEmpty(ofObject[key])) {
          return [key, ''];
        }
        return [key, reduceId(ofObject[key])];
      } else {
        return [key, ofObject[key]];
      }
    }).flattenDeep().value();
  }

  for (var _len = arguments.length, omit = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    omit[_key - 1] = arguments[_key];
  }

  return reduceId(_lodash2.default.omit(ctx, _lodash2.default.union(['id', 'sortId', 'name'], omit))).join('__');
}

var FilterContext = function FilterContext(init) {
  if (_lodash2.default.isString(init)) {
    init = { name: init };
  }
  init = _lodash2.default.defaults(init || {}, {
    name: undefined,
    fields: [],
    order: 'desc',
    compound: false,
    query: {},
    sort: {},
    skip: 0,
    limit: 0
  });
  this.fields = init.fields;
  this.order = init.order;
  this.compound = init.compound;
  this.query = init.query;
  this.sort = init.sort;
  this.skip = init.skip;
  this.limit = init.limit;
  this.name = init.name || idWithOmissions(this, 'name');
};

_lodash2.default.extend(FilterContext.prototype, {
  id: function id() {
    return idWithOmissions(this);
  },

  sortId: function sortId() {
    return idWithOmissions(this, 'skip', 'limit');
  }
});

FilterContext.FilterContextMixin = {
  componentDidMount: function componentDidMount() {
    // Look for a FilterContext provided to the component.
    if (this.props.filterContext) {
      // If there is a filter context provided, use that as the filter
      // context for this component. Allows us to inherit filters.
      this.filterContext = this.props.filterContext;
    } else {
      // If there is no filter context provided, generate one for the
      // component to use internally.
      this.filterContext = new FilterContext();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    // Remove filter context from stack
  }
};

FilterContext.InheritContextMixin = {};

FilterContext.symbols = {
  ASC: ASC,
  DESC: DESC,
  COMPOUND: COMPOUND,
  SIMPLE: SIMPLE
};

module.exports = FilterContext;