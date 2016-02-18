import _ from 'lodash'
import numeral from 'numeral'
import moment from 'moment'

export function formatMoney (price) {
  return numeral(price).format('0,0.00')
}

export function formatCurrency(price, symbol = '$') {
  return `${symbol}${formatMoney(price)}`
}

export function formatShortDate(date) {
  return moment(date).format('MM-D-YYYY')
}

export function formatAbbreviatedDate(date) {
  return moment(date).format('MMM Do YYYY')
}
