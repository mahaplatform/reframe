import React from 'react'
import PropTypes from 'prop-types'

class Fields extends React.Component {

  static contextTypes = {
    tray: PropTypes.object
  }

  static propTypes = {
    fields: PropTypes.array,
    results: PropTypes.object
  }

  render() {
    const { fields, results } = this.props
    return (
      <div className="filter-panel">
        <div className="filter-header">
          <div className="filter-header-back" />
          <div className="filter-header-title">
            Filters
          </div>
          <div className="filter-header-next" onClick={ this._handleDone.bind(this) }>
            Done
          </div>
        </div>
        <div className="filter-body">
          { fields.map((field, index) => {
            const values = this._values(field, results)
            return (
              <div key={`filter_${index}`} className="filter-item" onClick={ this._handleChoose.bind(this, index) }>
                <div className="filter-item-field">
                  {field.label}
                </div>
                <div className="filter-item-values">
                  { values && <div className="values">{ values }</div> }
                </div>
                <div className="filter-item-icon">
                  <i className="chevron right icon" />
                </div>
              </div>
            )
          }) }
        </div>
        <div className="filter-footer" onClick={ this._handleResetAll.bind(this) }>
          Reset Filter
        </div>
      </div>
    )
  }

  _count(filter, results) {
    return results[filter.name] ? results[filter.name].length : null
  }

  _values(field, results) {
    if(field.multiple && results[field.name]) {
      let values = []
      results[field.name].map(record => {
        values.push(record.value)
      })
      return values.join(', ')
    } else {
      if(results[field.name]) {
        return results[field.name].value
      }
    }
    return ''
  }

  _handleChoose(index) {
    this.props.onChoose(index)
  }

  _handleDone() {
    this.context.tray.close()
  }

  _handleResetAll() {
    this.props.onResetAll()
  }

}

export default Fields
