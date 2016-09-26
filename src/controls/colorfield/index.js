import React from 'react'
import { SketchPicker } from 'react-color';

class ColorField extends React.Component {

  static propTypes = {
    defaultValue: React.PropTypes.string,
    onChange: React.PropTypes.func,
  }

  static defaultProps = {
    defaultValue: '#FFFFFF',
    onChange: () => {},
  }

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      value: props.defaultValue || '#FFFFFF'
    }
  }

  render() {
    let style = {
      backgroundColor: this.state.value
    }
    return (
      <div className="colorfield">
        <div className="ui segment" onClick={ this._handleToggle.bind(this) }>
          <div className="color" style={ style } />
        </div>
        {(() => {
          if(this.state.open) {
            return (
              <div className="picker">
                <SketchPicker color={ this.state.value }
                              onChangeComplete={ this._handleChange.bind(this) } />
              </div>
            )
          }
        })()}
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    if(prevProps.defaultValue != this.props.defaultValue) {
      this._setValue(this.props.defaultValue)
    }
  }

  _handleToggle() {
    this.setState({ open: !this.state.open })
  }

  _handleChange(color) {
    this.setState({ open: false })
    this._setValue(color.hex)
    this.props.onChange(color.hex)
  }

  _setValue(value) {
    this.setState({value})
  }

}

export default ColorField
