import React from 'react'
import _ from 'lodash'

class Radios extends React.Component {

  static propTypes = {
    options: React.PropTypes.array,
    defaultValue: React.PropTypes.string,
    onChange: React.PropTypes.func,
  }

  static defaultProps = {
    options: [],
    defaultValue: null,
    onChange: () => {},
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
      <div className="radios" ref="control">
        {(() => {
          if(options.length) {
            return (
              <div className="grouped fields">
                {options.map((option, index) => {
                  return (
                    <div key={`option_${index}`} className="field">
                      <div className="ui radio checkbox" data-value={option.key}>
                        <input className="hidden"
                               type="radio"
                               name="radio"
                               defaultChecked={_.isEqual(this.state.value, option.key)}
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
    $(this.refs.control).find('.checkbox').checkbox({
      onChange: this.handleChange.bind(this)
    })
    if(defaultValue) {
      $(this.refs.control).checkbox('set checked', defaultValue)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    $(this.refs.control).find('.checkbox').checkbox('refresh')
  }

  handleChange(event) {
    let value = $(this.refs.control).find('.checkbox input:checked').val()
    this.setValue(value)
    this.props.onChange(value)
  }

  setValue(value) {
    this.setState({ value })
  }

}

export default Radios
