import _ from 'lodash'

export function objectToQueryString(params) {
  return _(params)
    .chain()
    .mapValues(p => encodeURIComponent(p))
    .toPairs()
    .map(queryPair => queryPair.join('='))
    .join('&')
    .thru(queries => "?" + queries)
    .value()
}
