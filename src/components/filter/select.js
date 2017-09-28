import React from 'react'
import PropTypes from 'prop-types'
import Search from '../search'

class Select extends React.Component {

  static contextTypes = {
    tray: PropTypes.object
  }

  static propTypes = {
    endpoint: PropTypes.string,
    format: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.string
    ]),
    label: PropTypes.string,
    multiple: PropTypes.bool,
    name: PropTypes.string,
    q: PropTypes.string,
    results: PropTypes.object,
    sort: PropTypes.object,
    text: PropTypes.string,
    value: PropTypes.string,
    onBack: PropTypes.func,
    onChoose: PropTypes.func,
    onReset: PropTypes.func,
    onUpdate: PropTypes.func
  }

  static defaultProps = {
    sort: {
      key: 'created_at',
      order: 'desc'
    }
  }

  render() {
    const { label } = this.props
    return (
      <div className="reframe-filter-panel">
        <div className="reframe-filter-header">
          <div className="reframe-filter-header-back" onClick={ this._handleBack.bind(this) }>
            <i className="chevron left icon" />
            Back
          </div>
          <div className="reframe-filter-header-title">
            { label }
          </div>
          <div className="reframe-filter-header-next" onClick={ this._handleDone.bind(this) }>
            Done
          </div>
        </div>
        <div className="reframe-filter-body">
          <Search { ...this._getSearch() } />
        </div>
        <div className="reframe-filter-footer" onClick={ this._handleReset.bind(this) }>
          Reset { label }
        </div>
      </div>
    )
  }

  _getSearch() {
    const { endpoint, format, label, name, multiple, results, sort, q, text, value, onUpdate  } = this.props
    return { endpoint, format, label, name, multiple, results, sort, q, text, value, onUpdate }
  }

  _handleBack() {
    this.props.onBack()
  }

  _handleDone() {
    this.context.tray.close()
  }

  _handleReset() {
    this.props.onReset(this.props.name)
  }

}

export default Select
