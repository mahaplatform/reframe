import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Format from '../format'
import * as actions from './actions'
import Search from './search'

class Lookup extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    active: PropTypes.bool,
    chosen: PropTypes.object,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.number,
    endpoint: PropTypes.string,
    format: PropTypes.oneOfType(
      prompt: PropTypes.string,
      prompt: PropTypes.func
    ),
    prompt: PropTypes.string,
    query: PropTypes.string,
    results: PropTypes.array,
    selected: PropTypes.number,
    sort: PropTypes.string,
    status: PropTypes.string,
    text: PropTypes.string,
    onBegin: PropTypes.func,
    onClear: PropTypes.func,
    onCancel: PropTypes.func,
    onChoose: PropTypes.func,
    onType: PropTypes.func,
    onLoad: PropTypes.func,
    onLoookup: PropTypes.func
  }

  render() {
    const { chosen, disabled, format, prompt, text } = this.props
    const value = chosen ? _.get(chosen, text) : ''
    return (
      <div className="lookup-field">
        { chosen &&
          <div className="lookup-token" onClick={ this._handleBegin.bind(this) }>
            <Format {...chosen} format={format} value={value} />
          </div>
        }
        { chosen &&
          <div className="lookup-field-clear">
            <i className="icon circle remove" onClick={ this._handleClear.bind(this) } />
          </div>
        }
        { !chosen &&
          <input type="text"
                 disabled={disabled}
                 onFocus={ this._handleBegin.bind(this) }
                 value={value}
                 placeholder={ prompt } />
       }
     </div>
    )
  }

  componentDidMount() {
    const { defaultValue, endpoint, onLoad } = this.props
    if(defaultValue) {
      const params = { $ids: [ defaultValue ] }
      onLoad(params, endpoint)
    }
  }

  componentDidUpdate(prevProps) {
    const { active, disabled, endpoint, sort, onClear, onLookup } = this.props
    const { modal } = this.context
    if(prevProps.active !== active && active) {
      const query = { $filter: { q: '' }, $sort: sort }
      onLookup(query, endpoint)
      modal.push(<Search {...this.props} />)
    } else if(prevProps.disabled !== disabled) {
      onClear()
    }
  }

  _handleBegin(e) {
    this.props.onBegin()
    e.target.blur()
    e.preventDefault()
    return false
  }

  _handleClear() {
    const { onClear, onChange } = this.props
    onClear()
    onChange()
  }

}

export default Lookup
