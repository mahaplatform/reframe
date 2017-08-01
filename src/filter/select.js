import React from 'react'
import PropTypes from 'prop-types'
import Search from '../search'

class Select extends React.Component {

  static contextTypes = {
    tray: PropTypes.object
  }

  static propTypes = {
    endpoint: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    sort: PropTypes.object,
    onBack: PropTypes.func,
    onChoose: PropTypes.func,
    onReset: PropTypes.func
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
        <Search { ...this.props } />
        <div className="reframe-filter-footer" onClick={ this._handleReset.bind(this) }>
          Reset { label }
        </div>
      </div>
    )
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
