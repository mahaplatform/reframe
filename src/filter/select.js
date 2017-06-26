import React from 'react'
import PropTypes from 'prop-types'
import Options from './options'

class Select extends React.Component {

  static contextTypes = {
    tray: PropTypes.object
  }

  static propTypes = {
    endpoint: PropTypes.string,
    sort: PropTypes.object
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
      <div className="filter-panel">
        <div className="filter-header">
          <div className="filter-header-back" onClick={ this._handleBack.bind(this) }>
            <i className="chevron left icon" />
            Back
          </div>
          <div className="filter-header-title">
            { label }
          </div>
          <div className="filter-header-next" onClick={ this._handleDone.bind(this) }>
            Done
          </div>
        </div>
        <Options {...this.props} />
        <div className="filter-footer" onClick={ this._handleReset.bind(this) }>
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
