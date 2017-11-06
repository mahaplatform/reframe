import React from 'react'
import PropTypes from 'prop-types'
import Lookup from '../lookup'
import moment from 'moment'
import pluralize from 'pluralize'

class TimeField extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    duration: PropTypes.bool,
    increment: PropTypes.number,
    prompt: PropTypes.string,
    start: PropTypes.string,
    tabIndex: PropTypes.number,
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
    duration: false,
    increment: 15,
    start: '12:00AM',
    tabIndex: 0
  }

  render() {
    return <Lookup { ...this._getLookup() } />
  }

  _getLookup() {

    return {
      ...this.props,
      type: 'lookup',
      options: this._getOptions(),
      format: ({ text, duration }) => (
        <div className="reframe-timefield-token">
          { text }
          { this.props.duration &&
            <span className="reframe-timefield-token-duration">
              ({ duration >= 1 ? pluralize('hour', duration, true) : pluralize('mins', duration * 60, true) })
            </span>
          }
        </div>
      )
    }
  }

  _getOptions() {

    const { increment, start } = this.props

    const today = moment().format('YYYY-MM-DD')

    const startTime = moment(`${today} ${start}`, 'YYYY-MM-DD HH:mm')

    const endTime = moment(`${today} 24:00`, 'YYYY-MM-DD HH:mm')

    const steps = (endTime.diff(startTime) / 1000 / 60 / 60)  * (60 / increment)

    const currTime = moment(`${today} ${start}`, 'YYYY-MM-DD HH:mm')

    return Array.apply(null, { length: steps }).reduce((times, i) => {

      const value = {
        value: currTime.format('HH:mm:ss'),
        text: currTime.format('hh:mm A'),
        duration: currTime.diff(startTime) / 1000 / 60 / 60
      }

      currTime.add(increment, 'minutes')

      return [
        ...times,
        value
      ]

    }, [])

  }

}

export default TimeField
