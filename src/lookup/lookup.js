import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import Format from '../format'
import Search from './search'
import Form from '../form'
import _ from 'lodash'

const ValueToken = ({ value }) => (
  <div className="reframe-value-token">
    { value }
  </div>
)

class Lookup extends React.Component {

  static propTypes = {
    active: PropTypes.bool,
    adding: PropTypes.bool,
    chosen: PropTypes.object,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.number,
    endpoint: PropTypes.string,
    format: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]),
    form: PropTypes.object,
    options: PropTypes.array,
    prompt: PropTypes.string,
    query: PropTypes.string,
    results: PropTypes.array,
    selected: PropTypes.number,
    sort: PropTypes.string,
    status: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
    onBegin: PropTypes.func,
    onClear: PropTypes.func,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    onChoose: PropTypes.func,
    onHideForm: PropTypes.func,
    onType: PropTypes.func,
    onLoad: PropTypes.func,
    onLoookup: PropTypes.func,
    onShowForm: PropTypes.func
  }

  static defaultProps = {
    format: ValueToken,
    text: 'text',
    value: 'value'
  }

  constructor(props) {
    super(props)
    this.state = {
      cacheKey: null
    }
  }

  render() {
    const { active, adding, chosen, disabled, format, prompt, text } = this.props
    const { cacheKey } = this.state
    const value = chosen ? _.get(chosen, text) : ''
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
          <div className="reframe-lookup-field-prompt" onClick={ this._handleBegin.bind(this) }>
            { prompt }
          </div>
        }
       <CSSTransition in={ active } classNames="cover" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
         <Search { ...this.props } cacheKey={ cacheKey } />
       </CSSTransition>
       <CSSTransition in={ adding } classNames="cover" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
         <Form { ...this._getForm() } />
       </CSSTransition>
     </div>
    )
  }

  componentDidMount() {
    const { defaultValue, endpoint, options, onChoose, onLoad } = this.props
    if(defaultValue) {
      if(endpoint) {
        onLoad({ $ids: [ defaultValue ] }, endpoint)
      } else {
        const chosen = _.find(options, { value: defaultValue })
        onChoose(chosen)
      }
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

  _getForm() {
    const { form, value, onChoose, onChange, onHideForm } = this.props
    return {
      ...form,
      onCancel: () => onHideForm(),
      onSuccess: (chosen) => {
        onChoose(chosen)
        onChange(_.get(chosen, value))
        onHideForm()
      }
    }
  }
}

export default Lookup
