import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Prompt extends React.Component {

  static contextTypes = {
    prompt: PropTypes.object
  }

  render() {
    return (
      <div className="chrome-page">
        <p><Link to="/">Back to Index</Link></p>
        <h2>Prompt</h2>
        <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
        <p><button className="ui button primary" onClick={this._handlePrompt.bind(this)}>Prompt</button></p>
      </div>
    )
  }

  _handlePrompt() {
    const options = [
      { label: 'Foo', handler: () => console.log('foo') },
      { label: 'Bar', handler: () => console.log('bar') },
      { label: 'Baz', handler: () => console.log('baz') }
    ]
    this.context.prompt.open('Choose your poison!', options)
  }

}

export default Prompt
