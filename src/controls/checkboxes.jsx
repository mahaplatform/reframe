import React from 'react'
import ReactDOM from 'react-dom'

class Checkboxes extends React.Component {
  static defaultProps = {
    onChange: () => {},
    options : []
  }

  constructor(props) {
    super(props)
    this.state = {value: props.defaultValue || null}
  }

  render() {
    var name = this.props.code + '[]'
    return (
      <div className="grouped fields" ref="control">
        { this.props.options.map((option, index) => {
          return (
          <div key={`option_${index}`} className="field">
            <div className={`ui checkbox`} data-value={option.key}>
              <input
                defaultValue={this.props.defaultValue}
                className="hidden"
                name={name}
                type="checkbox"
                value={option.key}/>
              <label>{option.value}</label>
            </div>
          </div>
            )
          })}
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.control).find('.checkbox').checkbox({
      onChange: this.handleChange.bind(this)
    })
  }

  getValue() {
    let values = $(this.refs.control).find('.checkbox input:checked').toArray().map(cb => {
      return $(cb).val()
    })
    return values
  }

  setValue(value) {
    $(this.refs.control).find(`.checkbox`).checkbox('set unchecked')
    if(_.isArray(value)) {
      _.each(value, v => {
        $(this.refs.control).find(`.checkbox[data-value*=${v}]`).checkbox('set checked')
      })
    }
    else {
      $(this.refs.control).find(`.checkbox[data-value*=${v}]`).checkbox('set checked')
    }
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

export default Checkboxes
