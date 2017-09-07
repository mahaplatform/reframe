import React from 'react'
import PropTypes from 'prop-types'

class ColorField extends React.Component {

  static propTypes = {
    color: PropTypes.string,
    colors: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onReady: PropTypes.func,
    onSet: PropTypes.func
  }

  static defaultProps = {
    defaultValue: null,
    disabled: false,
    onChange: () => {},
    onReady: () => {},
    onSet: () => {}
  }

  render() {
    const colors = [
      { name: 'red', value: '#DB2828' },
      { name: 'orange', value: '#F2711C' },
      { name: 'yellow', value: '#FBBD08' },
      { name: 'olive', value: '#B5CC18' },
      { name: 'green', value: '#21BA45' },
      { name: 'teal', value: '#00B5AD' },
      { name: 'blue', value: '#2185D0' },
      { name: 'violet', value: '#6435C9' },
      { name: 'purple', value: '#A333C8' },
      { name: 'pink', value: '#E03997' }
    ]
    return (
      <div className="reframe-colorfield">
        { colors.map((color, index) => (
          <div key={`color_${index}`} className="reframe-color" style={{ backgroundColor: color.value }} onClick={ this._handleSet.bind(this, color.name) }>
            { color.name === this.props.color && <i className="check icon" /> }
          </div>
        )) }
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady, onSet } = this.props
    if(defaultValue) onSet(defaultValue)
    onReady()
  }

  componentDidUpdate(prevProps) {
    const { color, onChange } = this.props
    if(prevProps.color !== color) {
      onChange(color)
    }
  }

  _handleSet(color) {
    this.props.onSet(color)
  }

}

export default ColorField
