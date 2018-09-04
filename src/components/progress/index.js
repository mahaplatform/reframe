import React from 'react'
import PropTypes from 'prop-types'

class Progress extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    percent: PropTypes.number,
    text: PropTypes.string,
    title: PropTypes.string
  }

  render() {
    const { label, title, text } = this.props
    const percent = this._getPercent()
    return (
      <div className="reframe-progress">
        <div className={ `pie p${percent}` }>
          <span>{ label || `${percent}%` }</span>
          <div className="slice">
            <div className="bar" />
            <div className="fill" />
          </div>
        </div>
        { title && <h3>{ title }</h3> }
        { text && <p>{ text }</p> }
      </div>
    )
  }

  _getPercent() {
    const { percent } = this.props
    return parseInt(percent)
  }

}

export default Progress
