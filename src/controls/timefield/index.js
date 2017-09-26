import React from 'react'
import PropTypes from 'prop-types'
import Lookup from '../lookup'

class TimeField extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    increment: PropTypes.number,
    prompt: PropTypes.string,
    onBusy: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onReady: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyDown: PropTypes.func
  }

  static defaultProps = {
    prompt: 'Choose a time',
    increment: 15
  }

  render() {
    return <Lookup { ...this._getLookup() } />
  }

  _getLookup() {
    return {
      ...this.props,
      type: 'lookup',
      options: this._getOptions()
    }
  }

  _getOptions() {

    const { increment } = this.props

    const zeroPad = (number) => (number < 10) ? `0${number}` : number

    return [...Array(24)].reduce((times, i, hour) => {

      const displayHour = (hour > 12) ? (hour - 12) : (hour > 0 ? hour : 12)

      return [
        ...times,
        ...[...Array(Math.floor(60 / increment))].map((j, index) => {

          const displayMinute = index * increment

          const displayAPM = (hour > 11) ? 'PM' : 'AM'

          return  {
            value: `${zeroPad(hour)}:${zeroPad(displayMinute)}:00`,
            text: `${displayHour}:${zeroPad(displayMinute)} ${displayAPM}`
          }

        })

      ]

    }, [])

  }

}

export default TimeField
