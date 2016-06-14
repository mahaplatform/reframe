import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Select from './select.js'
import Quickdate from '../utils/quickdate'
import Datefield from './datefield.js'

export default class DateRange extends React.Component {
  static composite = [
    'start_date_field',
    'end_date_field',
    'range_field'
  ]

  static defaultProps = {
    allowBlank: true,
    composite : {
      start_date_field: 'start_date',
      end_date_field  : 'end_date',
      range_field     : 'range'
    }
  }


  constructor(props) {
    super(props)
    this.state = {
      customRange: false,
      start_date : null,
      end_date   : null
    }
  }

  render() {
    return (
      <div>
        <div className="field">
          <Select ref="range_field" options={this.dateOptions()} placeholder="Date Range"
                  onChange={this.handleSelectDateRange.bind(this)} allowBlank={this.props.allowBlank}/>
        </div>
        {this.renderCustomFields()}
      </div>
    )
  }

  renderCustomFields() {
    if (this.state.customRange) {
      var style = {display: 'flex'}
    }
    else {
      var style = {display: 'none'}
    }
    return (
      <div className="two fields" style={style}>
        <div className="field">
          <Datefield ref="start_date_field" name="start_date_field" placeholder="Start Date" onChange={this.handleCustomDateChange.bind(this)}/>
        </div>
        <div className="field">
          <Datefield ref="end_date_field" name="end_date_field" placeholder="End Date" onChange={this.handleCustomDateChange.bind(this)} />
        </div>
      </div>
    )
  }

  componentDidMount() {
    if(this.props.defaultValue) {
      _.forEach(this.props.defaultValue, (v, k) => {
        this.setCompositeValue(k, v)
      })
    }
  }

  handleSelectDateRange() {
    let range = this.refs.range_field.getValue()
    if(range == null) {
      this.setState({
        customRange: false,
        start_date : null,
        end_date   : null
      })
    }
    else if (range === 'custom') {
      this.setState({customRange: true})
    }
    else {
      this.setState({customRange: false})
      let dates = Quickdate.parse(range)
    }
    this.props.onChange(this.props.code, this.getValue())
  }

  handleCustomDateChange() {
    this.props.onChange(this.props.code, this.getValue())
  }

  getValue() {
    if (this.state.customRange) {
      return {
        [this.props.composite.start_date_field] : this.refs.start_date_field.getValue(),
        [this.props.composite.end_date_field]   : this.refs.end_date_field.getValue(),
        [this.props.composite.range_field]      : this.refs.range_field.getValue()
      }
    }
    else {
      let range = this.refs.range_field.getValue()
      if (range) {
        let dates = Quickdate.parse(range)
        return {
          [this.props.composite.start_date_field]: dates.start.format('YYYY-MM-DD'),
          [this.props.composite.end_date_field]  : dates.end.format('YYYY-MM-DD'),
          [this.props.composite.range_field]     : this.refs.range_field.getValue()
        }
      }
      else {
        return null
      }
    }
  }

  setCompositeValue(key, value) {
    let rComposite = _.invert(this.props.composite)
    this.refs[rComposite[key]].setValue(value)
    if (rComposite[key] == 'range_field' && (value == false || value == 'custom')) {
      this.setState({customRange: true})
    }
  }

  clearField() {
    this.refs.start_date_field.clearField()
    this.refs.end_date_field.clearField()
    this.refs.range_field.clearField()
  }

  getReference() {
    return {
      [this.props.composite.start_date_field]: this,
      [this.props.composite.end_date_field]  : this,
      [this.props.composite.range_field]     : this
    }
  }

  dateOptions() {
    return [
      {key: "#@Y", value: "This Year"},
      {key: "#-1Y", value: "Last Year"},
      {key: "#@Q", value: "This Quarter"},
      {key: "#-1Q", value: "Last Quarter"},
      {key: "#@M", value: "This Month"},
      {key: "#-1M", value: "Last Month"},
      {key: "#@w", value: "This Week"},
      {key: "#-1w", value: "Last Week"},
      {key: "@y", value: "Year to Date"},
      {key: "-10Y", value: "Life to Date"},
      {key: "-30d", value: "Last 30 Days"},
      {key: "-60d", value: "Last 60 Days"},
      {key: "custom", value: "Custom"}
    ]
  }

}
