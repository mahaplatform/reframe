import PropTypes from 'prop-types'
import Options from './options'
import React from 'react'
import _ from 'lodash'

class Dynamic extends React.Component{

  static propTypes = {
    format: PropTypes.any,
    records: PropTypes.array,
    status: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
    onChoose: PropTypes.func
  }

  render() {
    return (this.props.records) ? <Options { ...this._getOptions() } /> : null
  }

  _getOptions() {
    const { format, records, status, onChoose } = this.props
    const options = records.map(this._getOption.bind(this))
    return { name, format, options, status, onChoose }
  }

  _getOption(record) {
    const { text, value } = this.props
    return {
      value: _.get(record, value),
      text: _.get(record, text),
      record
    }
  }

}

export default Dynamic
