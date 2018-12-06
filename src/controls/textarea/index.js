import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class TextArea extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    tabIndex: PropTypes.number,
    onBusy: PropTypes.func,
    onChange: PropTypes.func,
    onReady: PropTypes.func
  }

  static defaultProps = {
    defaultValue: '',
    disabled: false,
    maxLength: null,
    placeholder: '',
    rows: 5,
    tabIndex: 0,
    onBusy: () => {},
    onChange: () => {},
    onReady: () => {}
  }

  state = {
    value: ''
  }

  render() {
    const { value } = this.state
    const { maxLength } = this.props
    return (
      <div className="reframe-textarea">
        { maxLength &&
          <div className={ this._getMaxClass() }>
            { value.length } / { maxLength }
          </div>
        }
        <textarea { ...this._getTextarea() } />
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady } = this.props
    if(defaultValue) this.setState({
      value: _.toString(defaultValue)
    })
    onReady()
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.defaultValue !== prevProps.defaultValue) {
      this.setValue(this.props.defaultValue)
    }
    if(this.state.value !== prevState.value) {
      this.props.onChange(this.state.value )

    }
  }

  _getMaxClass() {
    const { value } = this.state
    const { maxLength } = this.props
    const classes = ['reframe-textarea-length']
    if(value.length >= maxLength) classes.push('max')
    return classes.join(' ')
  }

  _getTextarea() {
    const { placeholder, disabled, rows, tabIndex } = this.props
    const { value } = this.state
    return {
      placeholder,
      disabled,
      value,
      rows,
      tabIndex,
      onChange: this._handleChange.bind(this)
    }
  }

  _handleChange(event) {
    this.setValue(event.target.value)
  }

  setValue(value) {
    if(this.props.maxLength && value.length > this.props.maxLength) return
    this.setState({ value })
  }

}

export default TextArea
