import React from 'react'
import PropTypes from 'prop-types'
import Control from '../control'
import Fields from './fields'
import _ from 'lodash'

class Field extends React.Component {

  static propTypes = {
    action: PropTypes.string,
    columns: PropTypes.array,
    data: PropTypes.object,
    endpoint: PropTypes.string,
    errors: PropTypes.object,
    fields: PropTypes.array,
    include: PropTypes.bool,
    instructions: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    required: PropTypes.bool,
    tabIndex: PropTypes.number,
    type: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]).isRequired,
    show: PropTypes.bool,
    onBusy: PropTypes.func,
    onReady: PropTypes.func,
    onUpdateData: PropTypes.func
  }

  static defaultProps = {
    columns: [],
    data: {},
    errors: {},
    fields: [],
    include: true,
    options: [],
    required: false,
    show: true,
    onBusy: () => {},
    onReady: () => {},
    onUpdateData: () => {}
  }

  _handleBusy = this._handleBusy.bind(this)
  _handleReady = this._handleReady.bind(this)
  _handleUpdateData = this._handleUpdateData.bind(this)

  render() {
    const { include, instructions, label, show, type } = this.props
    const error = this._getError()
    if(!include || !show) return null
    return (
      <div className={ this._getClass() }>
        { label && <label>{ label }</label> }
        { instructions && <div className="instructions">{ instructions }</div> }
        { type === 'fields' ?
          <Fields { ...this._getFields() } /> :
          <Control { ...this._getControl() } />
        }
        { error && <div className="error-message">{ error }</div> }
      </div>
    )
  }

  _getClass() {
    const { required } = this.props
    const error = this._getError()
    const classes = ['field']
    if(required) classes.push('required')
    if(error) classes.push('error')
    return classes.join(' ')
  }

  _getError() {
    const { errors, name } = this.props
    return (errors && errors[name]) ? errors[name][0] : null
  }

  _getFields() {
    const { fields, onBusy, onReady, onUpdateData } = this.props
    return {
      fields,
      onBusy,
      onReady,
      onUpdateData
    }
  }

  _getControl() {
    const { data, name } = this.props
    const defaultValue = _.get(data, name)
    return {
      ...this.props,
      defaultValue,
      onBusy: this._handleBusy,
      onChange: this._handleUpdateData,
      onReady: this._handleReady
    }
  }

  _handleBusy() {
    this.props.onBusy(this.props.name)
  }

  _handleReady() {
    this.props.onReady(this.props.name)
  }

  _handleUpdateData(value) {
    this.props.onUpdateData(this.props.name, value)
  }

}

export default Field
