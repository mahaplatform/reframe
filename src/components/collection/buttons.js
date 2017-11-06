import React from 'react'
import PropTypes from 'prop-types'
import Task from '../task'

class Buttons extends React.Component {

  static propTypes = {
    buttons: PropTypes.array
  }

  render() {
    const { buttons } = this.props
    return (
      <div className="reframe-collection-footer">
        <div className="reframe-collection-footer-items">
          { buttons && buttons.map((button, index) => (
            <div key={`collection_footer_${index}`} className="reframe-collection-footer-item">
              <Task {...this._getTask(index)} />
            </div>
          )) }
        </div>
      </div>
    )
  }

  _getTask(index) {
    const { buttons } = this.props
    const button = buttons[index]
    const color = button.color || 'blue'
    const classes = ['ui',color,'fluid','button']
    if(button.disabled) classes.push('disabled')
    return {
      className: classes.join(' '),
      ...button
    }
  }

}

export default Buttons
