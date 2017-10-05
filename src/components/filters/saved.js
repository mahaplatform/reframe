import PropTypes from 'prop-types'
import Overview from './overview'
import React from 'react'

class Saved extends React.Component {

  static propTypes = {
  }

  render() {
    const saved = [
      { name: 'Saved Filter 1', results: { } }
    ]
    return (
      <div className="reframe-filters-panel">
        <div className="reframe-filters-header">
          <div className="reframe-filters-header-icon" onClick={ this._handleDone.bind(this) }>
            <i className="fa fa-chevron-left" />
          </div>
          <div className="reframe-filters-header-title">
            Saved Filters
          </div>
          <div className="reframe-filters-header-icon" />
        </div>
        <div className="reframe-filters-body">
          { saved.map((filter, index) => (
            <div key={`filter_${index}`} className="reframe-filters-item" onClick={ this._handleLoadFilter.bind(this, filter) }>
              <div className="reframe-filters-item-title">
                <i className="fa fa-fw fa-filter" />
                { filter.name }
              </div>
              <div className="reframe-filters-item-icon">
                <i className="fa fa-chevron-right" />
              </div>
            </div>
          ))}
          <div className="reframe-filters-item" onClick={ this._handleNewFilter.bind(this) }>
            <div className="reframe-filters-item-title">
              <i className="fa fa-fw fa-plus" />
              New Filter
            </div>
            <div className="reframe-filters-item-icon">
              <i className="fa fa-chevron-right" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  _getOverview() {
    return this.props
  }

  _handleLoadFilter(filter) {
    this.props.onSet(filter.results)
    this.props.onAddPanel(<Overview { ...this._getOverview() } />)
  }

  _handleNewFilter() {
    this.props.onAddPanel(<Overview { ...this._getOverview() } />)
  }

  _handleDone() {
    this.props.onDone()
  }

}

export default Saved
