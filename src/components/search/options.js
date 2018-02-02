import React from 'react'
import _ from 'lodash'
import Format from '../../utils/format'

class Options extends React.Component{

  render() {
    const { format, options } = this.props
    return (
      <div className="reframe-search-results">
        { options.map((option, index) => (
          <div key={`filter_${index}`} className="reframe-search-item" onClick={ this._handleChoose.bind(this, option) }>
            <div className={ this._getClasses() }>
              <Format { ...option.record } format={ format } value={ option.text } />
            </div>
            <div className="reframe-search-item-icon">
              { this._getChecked(option) ? <i className="green check icon" /> : null }
            </div>
          </div>
        )) }
      </div>
    )
  }

  _getClasses() {
    const classes = ['reframe-search-item-label']
    if(!this.props.format) classes.push('padded')
    return classes.join(' ')
  }

  _getChecked(option) {
    const { name, multiple, results } = this.props
    if(multiple) return results[name] && _.find(results[name], { key: option.value })
    return results[name] && results[name].key == option.value
  }

  _handleChoose(option) {
    const { value, text, token } = option
    const { name, multiple, results, onUpdate } = this.props
    let values = null
    if(multiple) {
      values = results[name] || []
      values = _.find(values, { key: value }) ? _.filter(values, item => (item.key !== value)) : [ ...values, { key: value, value: token || text } ]
    } else if(!results[name] || results[name].key !== value) {
      values = { key: value, value: token || text }
    }
    onUpdate(name, values)
  }

}

export default Options
