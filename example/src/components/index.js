import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Index extends React.Component {

  render() {
    return (
      <div className="chrome-page">
        <h2>Reframe</h2>
        <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
        <ul>
          <li><Link to="/confirm">Confirm</Link></li>
          <li><Link to="/drawer">Drawer</Link></li>
          <li><Link to="/flash">Flash</Link></li>
          <li><Link to="/modal">Modal</Link></li>
          <li><Link to="/prompt">Prompt</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
        </ul>
      </div>
    )
  }

}

export default Index
