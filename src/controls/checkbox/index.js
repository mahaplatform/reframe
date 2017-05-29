import React from 'react'
import _ from 'lodash'

class Checkbox extends React.Component {

  static propTypes = {
    autoComplete: React.PropTypes.string,
    maxLength: React.PropTypes.number,
    prefix: React.PropTypes.string,
    suffix: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onKeyPress: React.PropTypes.func,
    onKeyUp: React.PropTypes.func,
    onKeyDown: React.PropTypes.func
  }

  static defaultProps = {
    autoComplete: 'off',
    maxLength: null,
    prefix: null,
    suffix: null,
    disabled: false,
    placeholder: '',
    defaultValue: '',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyPress: () => {},
    onKeyUp: () => {},
    onKeyDown: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      value: _.toString(props.defaultValue)
    }
  }

  render() {
    const { label, style } = this.props
    let classes = ['ui', 'checkbox']
    if(style) {
      classes.push(style)
    }
    return (
      <div className="control">
        <div className={classes.join(" ")} ref="control">
          <input type="checkbox" name="public" />
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue } = this.props
    $(this.refs.control).checkbox({
      onChange: this._handleChange.bind(this)
    })
    if(defaultValue) {
      $(this.refs.control).checkbox('set checked')
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.defaultValue != this.props.defaultValue) {
      this.setValue(this.props.defaultValue)
    }
  }

  _handleChange(value) {
    this.props.onChange($(this.refs.control).checkbox('is checked'))
  }

  setValue(value) {
    if(!(this.props.maxLength && value.length > this.props.maxLength)) {
      this.setState({value})
    }
  }

}

export default Checkbox
