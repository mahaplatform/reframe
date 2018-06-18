import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Select extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.any,
    multiple: PropTypes.bool,
    endpoint: PropTypes.string,
    items: PropTypes.array,
    options: PropTypes.array,
    selected: PropTypes.any,
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
    tabIndex: 0,
    value: 'value',
    onBusy: () => {},
    onChange: () => {},
    onReady: () => {},
    onSubmit: (selected) => {}
  }

  render() {
    const { items, tabIndex } = this.props
    return (
      <div className="reframe-select ui field" tabIndex={ tabIndex }>
        { items.map((option, index) => (
          <div className={ this._getClass(option) } key={`option_${index}`} onClick={ this._handleClick.bind(this, option) }>
            { option.icon ?
              <div className="reframe-select-option-icon">
                <i className={`fa fa-fw fa-${option.icon}`} />
              </div> :
              <div className="reframe-select-option-icon">
                { this._getSelected(option) ? <i className="fa fa-fw fa-check-circle" /> : <i className="fa fa-fw fa-circle-o" /> }
              </div>
            }
            <div className="reframe-select-option-label">
              { option.title && <strong>{ option.title }<br /></strong> }
              { option.text }
            </div>
          </div>
        )) }
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, endpoint, options, onReady, onFetchItems, onSetSelected, onSetItems } = this.props
    if(defaultValue) onSetSelected(defaultValue)
    if(endpoint) return onFetchItems(endpoint)
    if(options) {
      onSetItems(options)
      onReady()
    }
  }

  componentDidUpdate(prevProps) {
    const { selected, status, onChange,onReady } = this.props
    if(selected !== prevProps.selected) onChange(selected)
    if(status !== prevProps.status && status === 'success') onReady()
  }

  _getSelected(option) {
    const { selected } = this.props
    const value = _.get(option, this.props.value)
    return value === selected
  }

  _getClass(option) {
    const classes = ['reframe-select-option']
    if(this._getSelected(option)) classes.push('selected')
    return classes.join(' ')
  }

  _handleClick(option) {
    const value = _.get(option, this.props.value)
    this.props.onChoose(value)
  }

}

export default Select
