import Format from '../../utils/format'
import PropTypes from 'prop-types'
import React from 'react'

class Options extends React.Component {

  static propTypes = {
    format: PropTypes.any,
    options: PropTypes.array,
    onChoose: PropTypes.func
  }

  render() {
    const { format, options } = this.props
    return (
      <div className="reframe-search-results">
        { options.map((option, index) => (
          <div key={`result_${index}`} className="reframe-search-item" onClick={ this._handleChoose.bind(this, option) }>
            <Format { ...option.record } format={ format } value={ option.text } />
          </div>
        )) }
      </div>
    )
  }

  _getClasses() {
    const classes = ['reframe-search-item-label']
    if(!this.props.format) classes.push('padded')
    return classes.join(' ')
  }

  _handleChoose(option) {
    this.props.onChoose(option.record)
  }

}

export default Options
