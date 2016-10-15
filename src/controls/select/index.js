import React from 'react'
import _ from 'lodash'
import $ from 'jquery'

class Select extends React.Component {

  static propTypes = {
    prompt: React.PropTypes.string,
    options: React.PropTypes.array,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    status: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    onChange: React.PropTypes.func
  }

  static defaultProps = {
    prompt: '',
    options: [],
    disabled: false,
    placeholder: '',
    status: 'ready',
    defaultValue: null,
    onChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      value: _.toString(props.defaultValue)
    }
  }

  render() {
    const { prompt, options, defaultValue, disabled, status } = this.props
    let classes = ['ui','fluid','search','selection','dropdown']
    if(disabled) {
      classes.push('disabled')
    }
    if(status == 'loading') {
      classes.push('loading')
    } else if(status == 'error') {
      classes.push('error')
    }
    return (
      <div className="select" ref="control">
        <div className={classes.join(' ')}>
          {(defaultValue) ? <div className="text">{defaultValue}</div> : <div className="default text">{prompt}</div>}
          <i className="dropdown icon"></i>
          {(() => {
            return (
              <div className="menu">
                {options.map((option, index) => {
                  return <div key={`option_${index}`} className={(option.key == this.state.value) ? 'item active selected' : 'item'} data-value={option.key}>{option.value}</div>
                })}
              </div>
            )
          })()}
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.control).find('.dropdown').dropdown({
      onChange: this.handleChange.bind(this)
    })
  }

  componentDidUpdate(prevProps) {
    $(this.refs.control).find('.dropdown').dropdown('refresh')
    if(prevProps.defaultValue != this.props.defaultValue) {
      this.setValue(this.props.defaultValue)
    }
  }

  handleChange(value) {
    this.setValue(value)
    this.props.onChange(value)
  }

  setValue(value) {
    this.setState({value})
  }

}

export default Select
