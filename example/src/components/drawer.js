import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Drawer extends React.Component {

  static contextTypes = {
    drawer: PropTypes.object
  }

  render() {
    return (
      <div className="chrome-page">
        <p><Link to="/">Back to Index</Link></p>
        <h2>Drawer</h2>
        <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
        <p>
          <button className="ui button primary" onClick={this._handleDrawer.bind(this, 'left')}>Left</button>
          <button className="ui button primary" onClick={this._handleDrawer.bind(this, 'right')}>Right</button>
        </p>
      </div>
    )
  }

  _handleDrawer(location) {
    this.context.drawer.open(<Foo />, location)
  }

}

const Foo = () => <div>Foo</div>

export default Drawer
