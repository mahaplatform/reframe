import _ from 'lodash'

let ASC = Symbol('ascending');
let DESC = Symbol('descending');
let COMPOUND = Symbol('Compound sort');
let SIMPLE = Symbol('Simple sort');

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

const defaultInitialState = {
  fields: [],
  sort: {},
  order: DESC,
  compound: false,
  query: {}
}

function idWithOmissions(ctx, ...omit) {
  function reduceId(ofObject) {
    return _(ofObject).keys().sortBy().map((key, index, collection) => {
      if (_.isArray(ofObject[key])) {
        if (_.isEmpty(ofObject[key])) {
          return [key, '']
        }
        return [key, _.sortBy(ofObject[key])]
      }
      else if (_.isObject(ofObject[key])) {
        if (_.isEmpty(ofObject[key])) {
          return [key, '']
        }
        return [key, reduceId(ofObject[key])]
      }
      else {
        return [key, ofObject[key]]
      }
    }).flattenDeep().value();
  }

  return reduceId(_.omit(ctx, _.union(['id', 'sortId', 'name'], omit))).join('__');
}

let FilterContext = function (init) {
  if (_.isString(init)) {
    init = {name: init}
  }
  init = _.defaults(init || {}, {
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
}

_.extend(FilterContext.prototype, {
  id: function () {
    return idWithOmissions(this);
  },

  sortId: function () {
    return idWithOmissions(this, 'skip', 'limit');
  }
});

FilterContext.FilterContextMixin = {

  componentDidMount() {
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

  componentWillUnmount() {
    // Remove filter context from stack
  }

}

FilterContext.InheritContextMixin = {}

FilterContext.symbols = {
  ASC,
  DESC,
  COMPOUND,
  SIMPLE
}

module.exports = FilterContext;
