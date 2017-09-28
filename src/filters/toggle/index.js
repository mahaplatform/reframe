import React from 'react'
import PropTypes from 'prop-types'

class Toggle extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.element,
    value: PropTypes.bool,
    onChange: PropTypes.func
  }

  render() {
    const { label, value } = this.props
    return (
      <div className="filter-item" onClick={ this._handleChange.bind(this) }>
        <div className="filter-item-title">
          { label }
        </div>
        <div className="filter-item-icon">
          { value === true && <i className="fa fa-check" /> }
        </div>
      </div>
    )
  }

  _handleChange() {
    const { name } = this.props
    const value = this.props.value === true ? null : true
    this.props.onChange(name, value)
  }


}

export default Toggle
