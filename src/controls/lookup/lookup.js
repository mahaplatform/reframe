import { CSSTransition } from 'react-transition-group'
import ValueToken from './value_token'
import PropTypes from 'prop-types'
import Format from '../../utils/format'
import Search from './search'
import Form from '../../components/form'
import React from 'react'
import _ from 'lodash'

class Lookup extends React.Component {

  static propTypes = {
    active: PropTypes.bool,
    adding: PropTypes.bool,
    chosen: PropTypes.object,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.any,
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
    onBusy: PropTypes.func,
    onClear: PropTypes.func,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    onChoose: PropTypes.func,
    onHideForm: PropTypes.func,
    onType: PropTypes.func,
    onLoad: PropTypes.func,
    onLoookup: PropTypes.func,
    onReady: PropTypes.func,
    onShowForm: PropTypes.func
  }

  static defaultProps = {
    defaultValue: null,
    disabled: false,
    format: ValueToken,
    text: 'text',
    value: 'value',
    onBusy: () => {},
    onChange: () => {},
    onReady: () => {}
  }

  render() {
    const { active, adding, chosen, format, prompt, text } = this.props
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
          <Search { ...this.props } />
        </CSSTransition>
        <CSSTransition in={ adding } classNames="cover" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
          <Form { ...this._getForm() } />
        </CSSTransition>

     </div>
    )
  }

  componentDidMount() {
    const { defaultValue, endpoint, options, onChoose, onLoad, onReady } = this.props
    if(!defaultValue) return onReady()
    if(endpoint) return onLoad({ $ids: [ defaultValue ] }, endpoint)
    const chosen = _.find(options, { value: defaultValue })
    onChoose(chosen)
    onReady()
  }

  componentDidUpdate(prevProps) {
    const { disabled, status, onClear, onReady } = this.props
    if(prevProps.status !== status && status === 'success') onReady()
    if(prevProps.disabled !== disabled) onClear()
  }

  _handleBegin() {
    this.props.onBegin()
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
        onHideForm()
        onChange(_.get(chosen, value))
      }
    }
  }

}

export default Lookup
