// @flow

import type { Option, Props } from './types'
import type { Node } from '../../types'

import Search from '../../components/search'
import moment from 'moment'
import React from 'react'
import _ from 'lodash'

class DateRange extends React.Component<Props, void> {

  render(): Node {
    return <Search { ...this._getSearch() } />
  }

  _getSearch() {
    const { label, name, q, results, onChoose, onUpdate } = this.props
    const options = this._getOptions()
    return { label, name, options, q, results, onChoose, onUpdate }
  }

  _getOptions(): Array<Option> {
    const { include } = this.props
    const options = []
    if(_.includes(include, 'this')) options.push({ value: 'this_week', description: this.description(0, 'week'), text: 'This Week' })
    if(_.includes(include, 'last')) options.push({ value: 'last_week', description: this.description(-1, 'week'), text: 'Last Week' })
    if(_.includes(include, 'next')) options.push({ value: 'next_week', description: this.description(1, 'week'), text: 'Next Week' })
    if(_.includes(include, 'this')) options.push({ value: 'this_month', description: this.description(0, 'month'), text: 'This Month' })
    if(_.includes(include, 'last')) options.push({ value: 'last_month', description: this.description(-1, 'month'), text: 'Last Month' })
    if(_.includes(include, 'next')) options.push({ value: 'next_month', description: this.description(1, 'month'), text: 'Next Month' })
    if(_.includes(include, 'this')) options.push({ value: 'this_quarter', description: this.description(0, 'quarter'), text: 'This Quarter' })
    if(_.includes(include, 'last')) options.push({ value: 'last_quarter', description: this.description(-1, 'quarter'), text: 'Last Quarter' })
    if(_.includes(include, 'next')) options.push({ value: 'next_quarter', description: this.description(1, 'quarter'), text: 'Next Quarter' })
    if(_.includes(include, 'this')) options.push({ value: 'this_year', description: this.description(0, 'year'), text: 'This Year' })
    if(_.includes(include, 'last')) options.push({ value: 'last_year', description: this.description(-1, 'year'), text: 'Last Year' })
    if(_.includes(include, 'next')) options.push({ value: 'next_year', description: this.description(1, 'year'), text: 'Next Year' })
    options.push({ value: 'custom', text: 'Custom' })
    return options
  }

  description(quantity: number, unit: string): string {
    const start = moment().add(quantity, unit).startOf(unit)
    const end = moment().add(quantity, unit).endOf(unit)
    const startdate = (start.format('YY') !== end.format('YY')) ? start.format('MMM D, YYYY') :  start.format('MMM D')
    const enddate =  (start.format('MM') !== end.format('MM')) ? end.format('MMM D, YYYY') : end.format('D, YYYY')
    return `${startdate} - ${enddate}`
  }

}

export default DateRange
