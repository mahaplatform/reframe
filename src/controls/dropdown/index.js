import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Dropdown extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    placeholder: 'Select an option...',
    defaultValue: null,
    options: [],
    onChange: (value) => {},
    onReady: () => {}
  }

  state = {
    value: null
  }

  render() {
    const { value } = this.state
    const { options, placeholder } = this.props
    const option = _.find(options, { 'value': value })
    return (
      <div className="reframe-dropdown ui compact menu">
        <div className="ui simple dropdown item">
          { option ?
            <span>{ option.text }</span> :
            <span>{ placeholder }</span>
          }
          <i className="dropdown icon"></i>
          <div className="menu">
            { options.map((option, index) => (
              <div className="item" key={`option_${index}`} onClick={ this._handleClick.bind(this, option.value) }>{ option.text }</div>
            )) }
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady } = this.props
    if(defaultValue) this.setValue(defaultValue)
    onReady()
  }

  componentDidUpdate(prevProps, prevState) {
    const { value } = this.state
    if( value !== prevState.value ){
      this.props.onChange(value)
    }
  }

  _handleClick(value) {
    this.setValue(value)
    //.reframe-dropdown .dropdown .menu
  }

  setValue(value) {
    this.setState({ value })
  }

}

export default Dropdown
