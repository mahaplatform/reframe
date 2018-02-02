import React from 'react'

class ColorField extends React.Component {

  static defaultProps = {
    colors: [
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
    ],
    defaultValue: null,
    disabled: false,
    tabIndex: 0,
    onBusy: () => {},
    onChange: (value) => {},
    onReady: () => {},
    onSet: (value) => {}
  }

  render() {
    const { colors, tabIndex } = this.props
    return (
      <div className="reframe-colorfield" tabIndex={ tabIndex }>
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
    if(prevProps.color !== color) onChange(color)
  }

  _handleSet(color) {
    this.props.onSet(color)
  }

}

export default ColorField
