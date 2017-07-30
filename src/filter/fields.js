import React from 'react'
import PropTypes from 'prop-types'

class Fields extends React.Component {

  static contextTypes = {
    tray: PropTypes.object
  }

  static propTypes = {
    fields: PropTypes.array,
    results: PropTypes.object,
    onChoose: PropTypes.func,
    onResetAll: PropTypes.func
  }

  render() {
    const { fields, results } = this.props
    return (
      <div className="reframe-filter-panel">
        <div className="reframe-filter-header">
          <div className="reframe-filter-header-back" />
          <div className="reframe-filter-header-title">
            Filters
          </div>
          <div className="reframe-filter-header-next" onClick={ this._handleDone.bind(this) }>
            Done
          </div>
        </div>
        <div className="reframe-filter-body">
          { fields.map((field, index) => {
            const values = this._values(field, results)
            return (
              <div key={`filter_${index}`} className="reframe-filter-item" onClick={ this._handleChoose.bind(this, index) }>
                <div className="reframe-filter-item-field">
                  {field.label}
                </div>
                <div className="reframe-filter-item-values">
                  { values && <div className="values">{ values }</div> }
                </div>
                <div className="reframe-filter-item-icon">
                  <i className="chevron right icon" />
                </div>
              </div>
            )
          }) }
        </div>
        <div className="reframe-filter-footer" onClick={ this._handleResetAll.bind(this) }>
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
