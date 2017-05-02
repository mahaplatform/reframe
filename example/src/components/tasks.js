import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Tasks extends React.Component {

  static contextTypes = {
    tasks: PropTypes.object
  }

  render() {
    return (
      <div className="chrome-page">
        <p><Link to="/">Back to Index</Link></p>
        <h2>Tasks</h2>
        <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
        <p><button className="ui button primary" onClick={this._handleTasks.bind(this)}>Tasks</button></p>
      </div>
    )
  }

  _handleTasks() {
    const tasks = [
      { label: 'Foo', modal: Foo },
      { label: 'Bar', modal: Bar },
      { label: 'Baz', modal: Baz }
    ]
    this.context.tasks.open(tasks)
  }

}

const Foo = () => <div>Foo</div>
const Bar = () => <div>Bar</div>
const Baz = () => <div>Baz</div>

export default Tasks
