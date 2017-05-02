import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Flash extends React.Component {

  static contextTypes = {
    flash: PropTypes.object
  }

  render() {
    return (
      <div className="chrome-page">
        <p><Link to="/">Back to Index</Link></p>
        <h2>Flash</h2>
        <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
        <p>
          <button className="ui button primary" onClick={this._handleFlash.bind(this, 'error')}>Error</button>
          <button className="ui button primary" onClick={this._handleFlash.bind(this, 'success')}>Success</button>
          <button className="ui button primary" onClick={this._handleFlash.bind(this, 'info')}>Info</button>
          <button className="ui button primary" onClick={this._handleFlash.bind(this, 'warning')}>Warning</button>
        </p>
      </div>
    )
  }
  _handleFlash(style) {
    this.context.flash.set(style, `This is a ${style} message`)
  }

}

export default Flash
