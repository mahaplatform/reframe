import Format from '../../utils/format'
import PropTypes from 'prop-types'
import React from 'react'

class Toggle extends React.Component {

  static propTypes = {
    format: PropTypes.any,
    name: PropTypes.string,
    label: PropTypes.string,
    results: PropTypes.object,
    onChange: PropTypes.func
  }

  render() {
    const { format, label, name, results } = this.props
    return (
      <div className="reframe-filters-item" onClick={ this._handleChange.bind(this) }>
        <div className="reframe-filters-item-title">
          <Format format={ format } value={ label } />
        </div>
        <div className="reframe-filters-item-icon">
          { results[name] && results[name] === true && <i className="fa fa-check" /> }
        </div>
      </div>
    )
  }

  _handleChange() {
    const { name, results } = this.props
    const value = results[name] && results[name] === true ? null : true
    this.props.onChange(name, value)
  }

}

export default Toggle
