import PropTypes from 'prop-types'
import Format from '../format'
import Search from './search'
import Form from '../form'
import React from 'react'
import _ from 'lodash'

class Lookup extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

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
    onReady: PropTypes.func,
    onShowForm: PropTypes.func
  }

  static defaultProps = {
    defaultValue: false,
    disabled: false,
    format: ValueToken,
    text: 'text',
    value: 'value',
    onChange: () => {},
    onReady: () => {},
    onSet: () => {}
  }

  render() {
    const { chosen, format, prompt, text } = this.props
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
    const { modal } = this.context
    const { active, adding, disabled, status, onClear, onReady } = this.props
    if(prevProps.status !== status && status === 'success') onReady()
    if(prevProps.disabled !== disabled) onClear()
    if(!prevProps.active && active) modal.push(<Search { ...this.props } />)
    if(prevProps.active && !active) modal.pop()
    if(!prevProps.adding && adding) modal.push(<Form { ...this._getForm() } />)
    if(prevProps.adding && !adding) modal.pop()
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

const ValueToken = ({ value }) => (
  <div className="reframe-value-token">
    { value }
  </div>
)

export default Lookup
