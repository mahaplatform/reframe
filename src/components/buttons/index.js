import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

class Buttons extends React.Component {

  static propTypes = {
    buttons: PropTypes.array
  }

  render() {
    const { buttons } = this.props
    return (
      <div className="reframe-buttons">
        { buttons && buttons.map((button, index) => (
          <Button { ...buttons[index] } key={`button_${index}`} />
        )) }
      </div>
    )
  }

}

export default Buttons
