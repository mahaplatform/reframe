import React from 'react'
import ReactDOM from 'react-dom'

class Radios extends React.Component {

  static propTypes = {
    code: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.oneOfType(React.PropTypes.string, React.PropTypes.string),
    asyncStatus: React.PropTypes.string,
    options: React.PropTypes.array
  }

  static defaultProps = {
    code: null,
    disabled: false,
    placeholder: '',
    defaultValue: '',
    onChange: () => {},
    options: []
  }

  constructor(props) {
    super(props)
    this.state = {value: props.defaultValue || null}
  }

  render() {
    return (
      <div className="grouped fields" ref="control">
        {this.props.options.map((option, index) => {
          return (
            <div className="field" key={`option_${index}`}>
              <div className="ui radio checkbox" data-value={option.key}>
                <input
                  defaultValue={this.props.defaultValue}
                  className="hidden"
                  name={this.props.code}
                  type="radio"
                  value={option.key} />
                <label>{option.value}</label>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.control).find('.radio').checkbox({
      onChange: this.handleChange.bind(this)
    })
  }

  componentDidUpdate() {
    $(this.refs.control).find('.radio').checkbox({
      onChange: this.handleChange.bind(this)
    })
  }

  getValue() {
    return $(this.refs.control).find('.radio input:checked').val()
  }

  setValue(value) {
    $(this.refs.control).find(`.checkbox`).checkbox('set unchecked')
    $(this.refs.control).find(`.checkbox[data-value*=${value}]`).checkbox('set checked')
  }

  handleChange(event) {
    this.props.onChange(this.props.code, this.getValue())
  }

  clearField() {
    $(this.refs.control).find(`.checkbox`).checkbox('set unchecked')
  }

  getReference() {
    return {[this.props.code]: this}
  }

}

export default Radios
