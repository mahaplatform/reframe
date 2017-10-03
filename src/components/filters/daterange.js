import PropTypes from 'prop-types'
import React from 'react'
import Search from '../search'
import moment from 'moment'
import _ from 'lodash'

class DaterangePanel extends React.Component {

  static propTypes = {
    format: PropTypes.any,
    label: PropTypes.string,
    include: PropTypes.array,
    name: PropTypes.string,
    results: PropTypes.object,
    text: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onUpdate: PropTypes.func,
    onRemovePanel: PropTypes.func
  }

  render() {
    const { label } = this.props
    return (
      <div className="reframe-filters-panel">
        <div className="reframe-filters-header" onClick={ this._handleRemovePanel.bind(this) }>
          <div className="reframe-filters-header-icon">
            <i className="fa fa-chevron-left" />
          </div>
          <div className="reframe-filters-header-title">
            { label }
          </div>
          <div className="reframe-filters-header-icon" />
        </div>
        <div className="reframe-filters-body">
          <Search { ...this._getSearch() } />
        </div>
        <div className="reframe-filters-footer" onClick={ this._handleReset.bind(this) }>
          Reset { label }
        </div>
      </div>
    )
  }

  _getSearch() {
    const { label, name, include, text, value, results, onChange } = this.props
    const options = this._getOptions(include)
    const onUpdate = onChange
    return { label, name, options, results, text, value, onUpdate }
  }

  _getOptions(include) {
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
    return options
  }

  description(quantity, unit) {
    const start = moment().add(quantity, unit).startOf(unit)
    const end = moment().add(quantity, unit).endOf(unit)
    const startdate = (start.format('YY') !== end.format('YY')) ? start.format('MMM D, YYYY') :  start.format('MMM D')
    const enddate =  (start.format('MM') !== end.format('MM')) ? end.format('MMM D, YYYY') : end.format('D, YYYY')
    return `${startdate} - ${enddate}`
  }

  _handleRemovePanel() {
    this.props.onRemovePanel()
  }

  _handleReset() {
    const { name, onChange } = this.props
    onChange(name, null)
  }

}

class Daterange extends React.Component {

  static propTypes = {
    format: PropTypes.func,
    label: PropTypes.string,
    mutiple: PropTypes.bool,
    name: PropTypes.string,
    options: PropTypes.array,
    values: PropTypes.object,
    onAddPanel: PropTypes.func
  }

  render() {
    const { label } = this.props
    return (
      <div className="reframe-filters-item" onClick={ this._handleClick.bind(this) }>
        <div className="reframe-filters-item-title">
          { label }
        </div>
        <div className="reframe-filters-item-icon">
          <i className="fa fa-chevron-right" />
        </div>
      </div>
    )
  }

  _handleClick() {
    this.props.onAddPanel(<DaterangePanel { ...this.props } />)
  }

}

export default Daterange
