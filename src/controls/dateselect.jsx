import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import MonthSelect from './monthselect.jsx'
import NumberSelect from './numberselect.jsx'
import moment from 'moment'
import SemanticClasses from 'src/utils/semantic_classes'

const IGNORED = Symbol('Ignored')

export default class Dateselect extends React.Component {

  static propTypes = {
    code: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string
  }

  static defaultProps = {
    code: null,
    disabled: false,
    dropdown: false,
    requireAll: true,
    placeholder: '',
    defaultValue: '',
    startYear: moment().subtract(10,'years').format('YYYY'),
    endYear: moment().format('YYYY'),
    fields: ['month', 'day', 'year'],
    format: 'YYYY-MM-DD',
    onChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      focused: false,
      validated: false,
      isValid: null
    }
  }

  render() {
    var month = (this.props.defaultValue) ? moment(this.props.defaultValue).format('MM') : null;
    var day = (this.props.defaultValue) ? moment(this.props.defaultValue).format('DD') : null;
    var year = (this.props.defaultValue) ? moment(this.props.defaultValue).format('YYYY') : null;

    let yearOptions = {year, startYear: this.props.startYear, endYear: this.props.endYear}

    return (
      <div className={`${SemanticClasses.numberToClass(this.props.fields.length)} fields dateselect`}>
        {_.includes(this.props.fields, 'month') ? <MonthField ref="month" month={month} handleChange={this.handleChange.bind(this)} /> : null}
        {_.includes(this.props.fields, 'day') ? <DayField ref="day" day={day} handleChange={this.handleChange.bind(this)} /> : null}
        {_.includes(this.props.fields, 'year') ? <YearField ref="year" {...yearOptions} handleChange={this.handleChange.bind(this)} /> : null}
      </div>
    )
  }

  getValue() {
    let value = {
      months: _.result(this, 'refs.month.getValue', IGNORED),
      days: _.result(this, 'refs.day.getValue', IGNORED),
      years: _.result(this, 'refs.year.getValue', IGNORED)
    }

    const anyNull = _(value).values().reject(v => v === IGNORED).any(_.isNull)
    const allNull = _(value).values().reject(v => v === IGNORED).all(_.isNull)

    if(allNull) {
      return null
    }

    if(this.props.requireAll && anyNull) {
      return null
    }

    value.months -= 1
    return moment(_.omit(value, v => _.isNull(v) || v === IGNORED || v < 0)).format(this.props.format)
  }

  setValue(value) {
    let m = moment(value)
    this.refs.month.setValue(m.format('MM'))
    this.refs.day.setValue(m.format('DD'))
    this.refs.year.setValue(m.format('YYYY'))
  }

  handleChange(event) {
    this.props.onChange(this.props.code, this.getValue())
  }

  clearField() {
    this.refs.month.clearField()
    this.refs.day.clearField()
    this.refs.year.clearField()
  }

  getReference() {
    return {[this.props.code]: this}
  }

}

class MonthField extends React.Component {
  render() {
    return (
      <div className="field">
        <MonthSelect ref="month" placeholder="Month" defaultValue={this.props.month} onChange={this.props.handleChange} />
      </div>
    )
  }

  getValue() {
    return this.refs.month.getValue()
  }

  setValue(v) {
    this.refs.month.setValue(v)
  }

  clearField() {
    this.refs.month.clearField()
  }
}

class DayField extends React.Component {
  render() {
    return (
      <div className="field">
        <NumberSelect ref="day" placeholder="Day" zeroPad start="1" end="31" defaultValue={this.props.day} onChange={this.props.handleChange} />
      </div>
    )
  }

  getValue() {
    return this.refs.day.getValue()
  }

  setValue(v) {
    this.refs.day.setValue(v)
  }

  clearField() {
    this.refs.day.clearField()
  }
}

class YearField extends React.Component {
  render() {
    return (
      <div className="field">
        <NumberSelect ref="year" placeholder="Year" start={this.props.startYear} end={this.props.endYear} defaultValue={this.props.year} onChange={this.props.handleChange} />
      </div>
    )
  }

  getValue() {
    return this.refs.year.getValue()
  }

  setValue(v) {
    this.refs.year.setValue(v)
  }

  clearField() {
    this.refs.year.clearField()
  }
}
