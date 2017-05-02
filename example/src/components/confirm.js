import React from 'react'
import PropTypes from 'prop-types'

class Confirm extends React.Component {

  static contextTypes = {
    confirm: PropTypes.object
  }

  render() {
    return (
      <div className="chrome-page">
        <div className="ui segment">
          <h2>Confirm</h2>
          <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
          <p><button className="ui button primary" onClick={this._handleConfirm.bind(this)}>Confirm</button></p>
        </div>
      </div>
    )
  }

  _handleConfirm() {
    const yes = () => console.log('yes')
    const no = () => console.log('no')
    this.context.confirm.open('Are you sure?', yes, no)
  }

}

export default Confirm
