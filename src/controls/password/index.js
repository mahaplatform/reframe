import validator from 'password-validator'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Password extends React.Component {

  static propTypes = {
    autoComplete: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    schema: PropTypes.array,
    tabIndex: PropTypes.number,
    onBlur: PropTypes.func,
    onBusy: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyDown: PropTypes.func,
    onReady: PropTypes.func
  }

  static defaultProps = {
    autoComplete: 'off',
    maxLength: null,
    disabled: false,
    placeholder: '',
    schema: [],
    tabIndex: 0,
    onBlur: () => {},
    onBusy: () => {},
    onChange: () => {},
    onFocus: () => {},
    onKeyPress: () => {},
    onKeyUp: () => {},
    onKeyDown: () => {},
    onReady: () => {}
  }

  state = {
    strong: false,
    value: ''
  }

  render() {
    const { schema } = this.props
    return (
      <div className="reframe-password">
        <div className="reframe-password-input">
          <input { ...this._getInput() } />
        </div>
        { schema.length > 0 &&
          <div className={ this._getClass() }>
            <i className="fa fa-fw fa-check-circle" />
          </div>
        }
      </div>
    )
  }

  componentDidMount() {
    this._handleConfigure()
    this.props.onReady()
  }

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.state
    const { schema } = this.props
    if(value !== prevState.value) {
      this._handleValidate()
    }
    if(!_.isEqual(schema, prevProps.schema)) {
      this._handleConfigure()
    }
  }

  _getClass() {
    const { strong } = this.state
    const classes = ['reframe-password-icon']
    if(strong) classes.push('strong')
    if(!strong) classes.push('weak')
    return classes.join(' ')
  }

  _getInput() {
    const { value } = this.state
    const { autoComplete, placeholder, tabIndex, onBlur, onFocus, onKeyPress, onKeyUp, onKeyDown } = this.props
    return {
      type: 'password',
      value,
      autoComplete,
      placeholder,
      tabIndex,
      onChange: this._handleChange.bind(this),
      onBlur,
      onFocus,
      onKeyPress,
      onKeyUp,
      onKeyDown
    }
  }

  _handleChange(event) {
    this.setValue(event.target.value)
    this.props.onChange(event.target.value)
  }

  _handleConfigure() {
    this.schema = new validator()
    this.props.schema.map(schema => {
      const rule = _.isString(schema) ? { rule: schema } : schema
      if(rule.rule === 'oneOf') this.schema.oneOf(rule.value)
      if(rule.rule === 'notOneOf') this.schema.is().not().oneOf(rule.value)
      if(rule.rule === 'min') this.schema.is().min(rule.value)
      if(rule.rule === 'max') this.schema.is().max(rule.value)
      if(rule.rule === 'digits') this.schema.has().digits()
      if(rule.rule === 'letters') this.schema.has().letters()
      if(rule.rule === 'nospaces') this.schema.has().not().spaces()
      if(rule.rule === 'symbols') this.schema.has().symbols()
      if(rule.rule === 'uppercase') this.schema.has().uppercase()
      if(rule.rule === 'lowercase') this.schema.has().lowercase()
    })
    this._handleValidate()
  }

  _handleValidate() {
    const { value } = this.state
    this.setState({
      strong: this.schema.validate(value)
    })
  }

  setValue(value) {
    if(!(this.props.maxLength && value.length > this.props.maxLength)) {
      this.setState({value})
    }
  }

}

export default Password
