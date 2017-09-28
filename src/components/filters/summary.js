import React from 'react'
import PropTypes from 'prop-types'
import Panel from './panel'
import _ from 'lodash'

class Summary extends React.Component {

  static contextTypes = {
    tray: PropTypes.object
  }

  static propTypes = {
    active: PropTypes.number,
    fields: PropTypes.array,
    filters: PropTypes.object,
    params: PropTypes.object,
    prompt: PropTypes.string,
    q: PropTypes.string,
    results: PropTypes.object,
    onChange: PropTypes.func,
    onChoose: PropTypes.func,
    onLoad: PropTypes.func,
    onQuery: PropTypes.func,
    onRemove: PropTypes.func,
    onResetAll: PropTypes.func,
    onSet: PropTypes.func,
    onUpdate: PropTypes.func
  }

  static defaultProps = {
    onChange: () => {}
  }

  render() {
    const { fields, results } = this.props
    return (
      <div className="refrane-filter-summary">
        { Object.keys(results).length > 0 &&
          <div className="reframe-filter-tokens">
            { fields.map((field, fieldIndex) => {
              if(results[field.name]) {
                if(_.isArray(results[field.name])) {
                  return results[field.name].map((filter, index) => (
                    <span key={`filter_${fieldIndex}_${index}`} className="ui small basic button">
                      <span className="label" onClick={ this._handleOpen.bind(this) }>
                        { filter.value }
                      </span>
                      <i className="remove icon" onClick={ this._handleRemove.bind(this, field.name, index) } />
                    </span>
                  ))
                } else if(_.isObject(results[field.name])) {
                  return (
                    <span key={`filter_remove_${fieldIndex}`} className="ui small basic button">
                      <span className="label" onClick={ this._handleOpen.bind(this) }>
                        { results[field.name].value }
                      </span>
                      <i className="remove icon" onClick={ this._handleRemove.bind(this, field.name) } />
                    </span>
                  )
                }
              }
            }) }
          </div>
        }
      </div>
    )
  }

  _handleOpen() {
    this.context.tray.open(<Panel { ...this.props } />)
  }

  _handleRemove(key, index) {
    this.props.onRemove(key, index)
  }


}

export default Summary
