import React from 'react'
import PropTypes from 'prop-types'

class Select extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.any,
    multiple: PropTypes.bool,
    options: PropTypes.array,
    selected: PropTypes.any,
    tabIndex: PropTypes.number,
    onChange: PropTypes.func,
    onChoose: PropTypes.func,
    onReady: PropTypes.func,
    onSet: PropTypes.func
  }

  static defaultProps = {
    tabIndex: 0
  }

  render() {
    const { options, tabIndex } = this.props
    return (
      <div className="reframe-select" tabIndex={ tabIndex }>
        { options.map((option, index) => (
          <div className={ this._getClass(option) } key={`option_${index}`} onClick={ this._handleClick.bind(this, option.value) }>
            <div className="reframe-select-option-icon">
              <i className={`fa fa-fw fa-${option.icon}`} />
            </div>
            <div className="reframe-select-option-label">
              <strong>{ option.title }</strong><br />
              { option.text }
            </div>
          </div>
        )) }
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady, onSet } = this.props
    if(defaultValue) onSet(defaultValue)
    onReady()
  }

  componentDidUpdate(prevProps) {
    const { selected, onChange } = this.props
    if(selected !== prevProps.selected) onChange(selected)
  }

  _getClass(option) {
    const { selected } = this.props
    const classes = ['reframe-select-option']
    if(option.value === selected) classes.push('selected')
    return classes.join(' ')
  }

  _handleClick(value) {
    this.props.onChoose(value)
  }

}

export default Select
