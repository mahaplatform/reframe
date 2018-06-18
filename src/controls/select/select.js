import Token from '../../components/token'
import Format from '../../utils/format'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

const Select = (multiple) => {

  class Control extends React.Component {

    static propTypes = {
      defaultValue: PropTypes.any,
      multiple: PropTypes.bool,
      endpoint: PropTypes.string,
      format: PropTypes.any,
      items: PropTypes.array,
      options: PropTypes.array,
      selected: PropTypes.array,
      status: PropTypes.string,
      tabIndex: PropTypes.number,
      text: PropTypes.string,
      value: PropTypes.string,
      onChange: PropTypes.func,
      onChoose: PropTypes.func,
      onReady: PropTypes.func,
      onFetchItems: PropTypes.func,
      onSetSelected: PropTypes.func,
      onSetItems: PropTypes.func
    }

    static defaultProps = {
      format: Token,
      multiple,
      tabIndex: 0,
      value: 'value',
      text: 'text',
      onBusy: () => {},
      onChange: () => {},
      onReady: () => {},
      onSubmit: (selected) => {}
    }

    render() {
      const { items, format, tabIndex, text } = this.props
      return (
        <div className="reframe-select ui field" tabIndex={ tabIndex }>
          { items.map((option, index) => (
            <div key={`option_${index}`} { ...this._getItem(option) }>
              <div className="reframe-select-option-icon">
                <i className={`fa fa-fw fa-${this._getItemIcon(option)}`} />
              </div>
              <div className="reframe-select-option-label">
                <Format { ...option } format={ format } value={ _.get(option, text) } />
              </div>
            </div>
          )) }
        </div>
      )
    }

    componentDidMount() {
      const { defaultValue, endpoint, options, onReady, onFetchItems, onSetItems } = this.props
      if(defaultValue) this._handleSetSelected(defaultValue)
      if(endpoint) return onFetchItems(endpoint)
      if(options) {
        onSetItems(options)
        onReady()
      }
    }

    componentDidUpdate(prevProps) {
      const { multiple, selected, status, onChange, onReady } = this.props
      if(status !== prevProps.status && status === 'success') {
        onReady()
      }
      if(selected !== prevProps.selected) {
        const value = multiple ? selected : selected[0]
        onChange(value)
      }
    }

    _getItem(option) {
      return {
        className: this._getItemClass(option),
        onClick: this._handleClick.bind(this, option)
      }
    }

    _getSelected(option) {
      const { selected } = this.props
      const value = _.get(option, this.props.value)
      return _.includes(selected, value)
    }

    _getItemClass(option) {
      const classes = ['reframe-select-option']
      if(this._getSelected(option)) classes.push('selected')
      return classes.join(' ')
    }

    _getItemIcon(option) {
      const { multiple } = this.props
      const selected = this._getSelected(option)
      if(multiple && selected) return 'check-square'
      if(multiple && !selected) return 'square-o'
      if(!multiple && selected) return 'check-circle'
      if(!multiple && !selected) return 'circle-o'
    }

    _handleSetSelected(defaultValue) {
      const { onSetSelected } = this.props
      const selected = !_.isArray(defaultValue) ? [defaultValue] : defaultValue
      onSetSelected(selected)
    }

    _handleClick(option) {
      const { multiple, onChoose } = this.props
      const value = _.get(option, this.props.value)
      onChoose(multiple, value)
    }

  }

  return Control

}

export default Select
