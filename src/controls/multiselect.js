import React from 'react'
import _ from 'lodash'
import $ from 'jquery'

class MultiSelect extends React.Component {

  static propTypes = {
    prompt: React.PropTypes.string,
    options: React.PropTypes.array,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    onChange: React.PropTypes.func
  }

  static defaultProps = {
    prompt: '',
    options: [],
    disabled: false,
    placeholder: '',
    defaultValue: [],
    onChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      value: _.toString(props.defaultValue)
    }
  }

  render() {
    return (
      <div className="select" ref="control">
        <div className="ui fluid search selection dropdown">
          <div className="default text">{this.props.prompt}</div>
          <i className="dropdown icon"></i>
          {(() => {
            if(this.props.options.length) {
              return (
                <div className="menu">
                  {this.props.options.map((option, index) => {
                    return <div key={`option_${index}`} className="item" data-value={option.key}>{option.value}</div>
                  })}
                </div>
              )
            } else  {
              return <div className="menu"></div>
            }
          })()}
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.control).find('dropdown').dropdown({
      onChange: this.handleChange.bind(this)
    })
  }

  componentDidUpdate(prevProps) {
    $(this.refs.control).find('dropdown').dropdown('refresh')
    if(prevProps.defaultValue != this.props.defaultValue) {
      this.setState({
        value: this.props.defaultValue
      })
    }
  }

  handleChange(value) {
    this.setValue(value)
    this.props.onChange(this.props.code, value)
  }


}

export default MultiSelect
