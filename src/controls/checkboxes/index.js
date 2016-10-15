import React from 'react'
import _ from 'lodash'
import $ from 'jquery'

class Checkboxes extends React.Component {

  static propTypes = {
    options: React.PropTypes.array,
    defaultValue: React.PropTypes.array,
    onChange: React.PropTypes.func
  }

  static defaultProps = {
    options: [],
    defaultValue: [],
    onChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      value: props.defaultValue
    }
  }

  render() {
    const { options } = this.props
    return (
      <div className="checkboxes" ref="control">
        {(() => {
          if(options.length) {
            return (
              <div className="grouped fields">
                {options.map((option, index) => {
                  return (
                    <div key={`option_${index}`} className="field">
                      <div className="ui checkbox" data-value={option.key} ref={option.key}>
                        <input className="hidden"
                               type="checkbox"
                               defaultChecked={_.includes(this.state.value, option.key)}
                               defaultValue={option.key} />
                        <label>{option.value}</label>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          } else  {
            return <div className="grouped fields"></div>
          }
        })()}
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue } = this.props
    $(this.refs.control).checkbox({
      onChange: this._handleChange.bind(this)
    })
    if(defaultValue) {
      defaultValue.map((value) => {
        $(this.refs[value]).checkbox('set checked')
      })
    }
  }

  componentDidUpdate() {
    $(this.refs.control).find('.checkbox').checkbox('refresh')
  }

  _handleChange(event) {
    let values = $(this.refs.control).find('.checkbox input:checked').toArray().map((checkbox) => {
      return $(checkbox).val()
    })
    this.setValue(values)
    this.props.onChange(values)
  }

  setValue(value) {
    this.setState({ value })
  }

}

export default Checkboxes
