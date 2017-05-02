import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Modal extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  render() {
    return (
      <div className="chrome-page">
        <p><Link to="/">Back to Index</Link></p>
        <h2>Modal</h2>
        <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
        <p><button className="ui button primary" onClick={this._handleModal.bind(this)}>Modal</button></p>
      </div>
    )
  }

  _handleModal() {
    this.context.modal.push(<Foo />)
  }

}

const Foo = () => <div>Foo</div>

export default Modal
