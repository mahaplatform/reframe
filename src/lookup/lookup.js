import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import _ from 'lodash'
import Format from '../format'
import Search from './search'

class LookupOutlet extends React.Component {

  render() {
    return <div className="reframe-lookup-search-outlet">{ this.props.children }</div>
  }

}

class Lookup extends React.Component {

  static propTypes = {
    active: PropTypes.bool,
    chosen: PropTypes.object,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.number,
    endpoint: PropTypes.string,
    format: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]),
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
    const { active, chosen, disabled, format, prompt, text } = this.props
    const value = chosen ? chosen.text : ''
    return (
      <div className="reframe-lookup-field">
        { chosen &&
          <div className="reframe-lookup-token" onClick={ this._handleBegin.bind(this) }>
            <Format { ...chosen } format={ format } value={ value } />
          </div>
        }
        { chosen &&
          <div className="reframe-lookup-field-clear">
            <i className="icon circle remove" onClick={ this._handleClear.bind(this) } />
          </div>
        }
        { !chosen &&
          <input type="text"
                 disabled={ disabled }
                 onFocus={ this._handleBegin.bind(this) }
                 value={ value }
                 placeholder={ prompt } />
       }
       <CSSTransitionGroup component={ LookupOutlet } transitionName="cover" transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }>
         { active && <Search { ...this.props } />}
       </CSSTransitionGroup>
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
    const { disabled, onClear } = this.props
    if(prevProps.disabled !== disabled) onClear()
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
