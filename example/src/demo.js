import React from 'react'
import PropTypes from 'prop-types'

const Foo = () => <div>Foo</div>
const Bar = () => <div>Bar</div>
const Baz = () => <div>Baz</div>

class Demo extends React.Component {

  static contextTypes = {
    confirm: PropTypes.object,
    drawer: PropTypes.object,
    flash: PropTypes.object,
    modal: PropTypes.object,
    prompt: PropTypes.object,
    tasks: PropTypes.object
  }

  render() {
    return (
      <div className="chrome-page">
        <div className="ui segments">
          <div className="ui segment">
            <h2>Flash</h2>
            <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
            <p>
              <button className="ui button primary" onClick={this._handleFlash.bind(this, 'error')}>Error</button>
              <button className="ui button primary" onClick={this._handleFlash.bind(this, 'success')}>Success</button>
              <button className="ui button primary" onClick={this._handleFlash.bind(this, 'info')}>Info</button>
              <button className="ui button primary" onClick={this._handleFlash.bind(this, 'warning')}>Warning</button>
            </p>
          </div>
          <div className="ui segment">
            <h2>Modal</h2>
            <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
            <p><button className="ui button primary" onClick={this._handleModal.bind(this)}>Modal</button></p>
          </div>
          <div className="ui segment">
            <h2>Tasks</h2>
            <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
            <p><button className="ui button primary" onClick={this._handleTasks.bind(this)}>Tasks</button></p>
          </div>
          <div className="ui segment">
            <h2>Drawer</h2>
            <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
            <p>
              <button className="ui button primary" onClick={this._handleDrawer.bind(this, 'left')}>Left</button>
              <button className="ui button primary" onClick={this._handleDrawer.bind(this, 'right')}>Right</button>
            </p>
          </div>
          <div className="ui segment">
            <h2>Prompt</h2>
            <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
            <p><button className="ui button primary" onClick={this._handlePrompt.bind(this)}>Prompt</button></p>
          </div>
          <div className="ui segment">
            <h2>Confirm</h2>
            <p>Organic health goth try-hard brooklyn retro gochujang. Tote bag chambray fashion axe locavore, keytar readymade DIY. Before they sold out hot chicken bespoke plaid.</p>
            <p><button className="ui button primary" onClick={this._handleConfirm.bind(this)}>Confirm</button></p>
          </div>
        </div>
      </div>
    )
  }

  _handlePush(url) {
    this.context.history.push(url)
  }

  _handleBack() {
    this.context.history.back()
  }

  _handleFlash(style) {
    this.context.flash.set(style, `This is a ${style} message`)
  }

  _handleModal() {
    this.context.modal.push(<Foo />)
  }

  _handleTasks() {
    const tasks = [
      { label: 'Foo', modal: Foo },
      { label: 'Bar', modal: Bar },
      { label: 'Baz', modal: Baz }
    ]
    this.context.tasks.open(tasks)
  }

  _handleDrawer(location) {
    this.context.drawer.open(<Foo />, location)
  }

  _handlePrompt() {
    const options = [
      { label: 'Foo', handler: () => console.log('foo') },
      { label: 'Bar', handler: () => console.log('bar') },
      { label: 'Baz', handler: () => console.log('baz') }
    ]
    this.context.prompt.open('Choose your poison!', options)
  }

  _handleConfirm() {
    const yes = () => console.log('yes')
    const no = () => console.log('no')
    this.context.confirm.open('Are you sure?', yes, no)
  }

}

export default Demo
