import PropTypes from 'prop-types'
import Lookup from './lookup'
import Select from './select'
import Toggle from './toggle'
import Daterange from './daterange'
import React from 'react'

class Overview extends React.Component {

  static propTypes = {
    filters: PropTypes.array,
    results: PropTypes.object,
    onAddPanel: PropTypes.func,
    onChange: PropTypes.func,
    onRemovePanel: PropTypes.func,
    onReset: PropTypes.func,
    onUpdate: PropTypes.func
  }

  render() {
    const { filters } = this.props
    return (
      <div className="reframe-filters-panel">
        <div className="reframe-filters-header">
          <div className="reframe-filters-header-icon" />
          <div className="reframe-filters-header-title">
            Filter Results
          </div>
          <div className="reframe-filters-header-icon" />
        </div>
        <div className="reframe-filters-body">
          <div className="reframe-filters-overview">
            { filters.map((filter, index) => {
              if(filter.type === 'toggle') return <Toggle {...this._getToggle(filter) } key={`filter_${index}`} />
              if(filter.type === 'lookup') return <Lookup {...this._getLookup(filter) } key={`filter_${index}`} />
              if(filter.type === 'select') return <Select {...this._getSelect(filter) } key={`filter_${index}`} />
              if(filter.type === 'daterange') return <Daterange {...this._getDaterange(filter) } key={`filter_${index}`} />
            })}
          </div>
        </div>
        <div className="reframe-filters-footer" onClick={ this._handleReset.bind(this) }>
          Reset Filters
        </div>
      </div>
    )
  }

  _getToggle(filter) {
    const { results, onChange } = this.props
    const { format, label, name } = filter
    return {
      format,
      label,
      name,
      results,
      onChange
    }
  }

  _getLookup(filter) {
    const { results, onAddPanel, onChange, onRemovePanel } = this.props
    const { format, label, multiple, options } = filter
    return {
      format,
      label,
      multiple,
      name,
      options,
      results,
      onAddPanel,
      onChange,
      onRemovePanel
    }
  }

  _getSelect(filter) {
    const { results, onAddPanel, onChange, onRemovePanel } = this.props
    return {
      ...filter,
      results,
      onAddPanel,
      onChange,
      onRemovePanel
    }
  }

  _getDaterange(filter) {
    const { results, onAddPanel, onChange, onRemovePanel } = this.props
    return {
      ...filter,
      results,
      onAddPanel,
      onChange,
      onRemovePanel
    }
  }

  _handleReset() {
    this.props.onReset()
  }

}

export default Overview
