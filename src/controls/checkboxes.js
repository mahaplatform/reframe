import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

class Checkboxes extends React.Component {
  static defaultProps = {
    onChange: () => {},
    options : [],
    toggle: false
  }

  constructor(props) {
    super(props)
    this.state = {value: props.defaultValue || null}
  }

  render() {
    var name = this.props.code + '[]'
    var toggle = this.props.toggle
    var toggleClasses = "ui basic small checkboxes toggle button"
    return (
      <div className="grouped fields" ref="control">
        { toggle ? <div className={toggleClasses} onClick={this.toggleAll.bind(this)}>Toggle All</div> : null}
        { this.props.options.map((option, index) => {
          return (
          <div key={`option_${index}`} className="field">
            <div className={`ui checkbox`} data-value={option.key}>
              <input
                defaultValue={option.key}
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
  componentDidUpdate(prevProps, prevState) {
    $(this.refs.control).find('.checkbox').checkbox({
      onChange: this.handleChange.bind(this)
    })

    // If the options available have changed, reapply the selected values from
    // the current state
    if(!_.isEqual(prevProps.options, this.props.options)) {
      this.setValue(this.state.value)
    }
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
        $(this.refs.control).find(`.checkbox[data-value=${v}]`).checkbox('set checked')
      })
    }
    else {
      $(this.refs.control).find(`.checkbox[data-value=${v}]`).checkbox('set checked')
    }
  }

  handleChange(event) {
    this.props.onChange(this.props.code, this.getValue())
  }

  clearField() {
    $(this.refs.control).find(`.checkbox`).checkbox('set unchecked')
  }

  toggleAll() {
    let val = this.getValue()
    let opts = this.props.options
    if(val && val.length < opts.length) {
      // Fill them all
      $(this.refs.control).find(`.checkbox`).checkbox('set checked')
    }
    else if (val.length === opts.length) {
      // Clear them all
      $(this.refs.control).find(`.checkbox`).checkbox('set unchecked')
    }
  }

  getReference() {
    return {[this.props.code]: this}
  }

}

export default Checkboxes
