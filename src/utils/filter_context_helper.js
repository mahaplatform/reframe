import FilterContext from './filter_context.js'
import _ from 'lodash'
import history from 'utils/history'

export default class FilterContextHelper {
  static wrap(FC) {
    // Make sure the FC isn't already wrapped
    if(FC.__enhanced__ === true) {
      return FC;
    }
    else {
      return new FilterContextEnhancer(FC);
    }
  }

  static toQueryParams(FC) {
    return this.wrap(FC).toQueryParams();
  }

  static toQueryString(FC) {
    return this.wrap(FC).toQueryString();
  }

  static fromQueryString(str) {
    let loc = history.createLocation(`/admin${str}`)
    return FilterContextHelper.fromQueryParams(loc.query)
  }

  static fromQueryParams(qp) {
    let {sort, fields, ...query} = qp
    let nfc = new FilterContext({
      sort: _(sort).thru(sort => {
        if(!sort) {
          return {}
        }
        if(_.startsWith('-', sort)) {
          return {[sort.slice(1)]: 'desc'}
        }
        else {
          return {[sort]: 'asc'}
        }
      }).value(),
      fields: fields ? fields.split(',') : [],
      query
    })
    return new FilterContextEnhancer(nfc)
  }

  static areEquivalent(FC1, FC2) {
    return FC1.sortId() === FC2.sortId();
  }

  static clone(FC) {
    if(FC.__enhanced__ === true) {
      return FC.clone();
    }
    else {
      return this.wrap(FC).clonePlain();
    }
  }
}

export class FilterContextEnhancer {
  constructor(FC) {
    this.fc = FC;
    this.__enhanced__ = true;
  }

  toQueryParams() {
    let qp = _.omit(this.fc.query || {}, _.isNull);
    // sort[key]=display_name&sort[order]=asc
    if(!_.isEmpty(this.fc.sort)) {
      qp['sort'] = _.map(this.fc.sort, (ord, field) => {
        switch (ord.toLowerCase()) {
        case 'desc':
          return `-${field}`;
          break;

        case 'asc':
          return `${field}`;
          break;
        }
      }).join(',');
    }

    function emptyValues(val) {
      if(_.isArray(val) || _.isPlainObject(val)) {
        return _.isEmpty(val);
      }
      else if(_.isNumber(val)) {
        return val === 0;
      }
      else {
        return val == null;
      }
    }

    let reduc = _(this.fc)
      .pick(['fields', 'skip', 'limit'])
      .omitBy(emptyValues)
      .mapKeys((val, key) => {
        return _.snakeCase(key);
      })
      .merge(qp)
      .value();

    return reduc;
  }

  toQueryString() {
    let qp = this.toQueryParams();
    let qstring = _.map(qp, (value, parameter) => {
      return `${parameter}=${encodeURIComponent(value)}`;
    });
    return qstring.join('&');
  }

  equivalentTo(otherContext) {
    return otherContext.sortId() === this.fc.sortId();
  }

  clone() {
    let cfc = this.clonePlain();
    return FilterContextHelper.wrap(cfc);
  }

  clonePlain() {
    return new FilterContext(_.cloneDeep(this.fc));
  }

  get sortId() {
    return this.fc.sortId();
  }

  get asQuery() {
    return this.toQueryParams();
  }

  get asQueryString() {
    return this.toQueryString();
  }


  // Getters

  get name() {
    return this.fc.name;
  }

  get sort() {
    return this.fc.sort;
  }

  get fields() {
    return this.fc.fields;
  }

  get order() {
    return this.fc.order;
  }

  get compound() {
    return this.fc.compound;
  }

  get order() {
    return this.fc.order;
  }

  get query() {
    return this.fc.query;
  }


  // Setters

  set name(name) {
    this.fc.name = name;
  }

  set sort(sort) {
    this.fc.sort = sort;
  }

  set fields(fields) {
    this.fc.fields = fields;
  }

  set order(order) {
    this.fc.order = order;
  }

  set compound(compound) {
    this.fc.compound = compound;
  }

  set order(order) {
    this.fc.order = order;
  }

  set query(query) {
    this.fc.query = query;
  }
}
