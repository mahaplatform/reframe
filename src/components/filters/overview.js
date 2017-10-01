import PropTypes from 'prop-types'
import Lookup from './lookup'
import Select from './select'
import Toggle from './toggle'
import React from 'react'

class Overview extends React.Component {

  static propTypes = {
    filters: PropTypes.array,
    values: PropTypes.object,
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
    const { values, onChange } = this.props
    const value = values[filter.name]
    const { format, label, name } = filter
    return {
      format,
      label,
      name,
      value,
      onChange
    }
  }

  _getLookup(filter) {
    const { values, onAddPanel, onChange, onRemovePanel } = this.props
    const value = values[filter.name]
    const { format, label, multiple, options } = filter
    return {
      format,
      label,
      multiple,
      name,
      options,
      values,
      value,
      onAddPanel,
      onChange,
      onRemovePanel
    }
  }

  _getSelect(filter) {
    const { values, onAddPanel, onChange, onRemovePanel } = this.props
    const value = values[filter.name]
    return {
      ...filter,
      value,
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
