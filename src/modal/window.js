import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

const noop = () => {}


export {PlainWindow} from './plain.js'

export default class Window extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    onApprove: noop,
    onCancel: noop,
    onClose: noop,
    closeable: true,
    cancelButtonLabel: 'Cancel',
    approveButtonLabel: 'Continue',
    customBody: false
  }

  constructor(props) {
    super(props)

    this.state = {
      top: 0
    }
  }

  render() {
    return (
      <div ref="modalDimmer" className="ui dimmer modals visible active page transition"
           onClick={this.dimmerClick.bind(this)}>
        <div ref="modalWindow" style={{marginTop: this.state.top}}
             className="ui small modal animating transition active" key={'collection_confirmation'}>
          {this.props.closeable ? <i className="close icon" onClick={this.props.onClose}/> : null }
          <div className="header">{this.props.title}</div>
          <div className="content">
            {this.props.children}
          </div>
          <div className="actions">
            {_.map(this.getButtons(), button => {
              return <div className={`ui ${button.color} button`} onClick={button.handler}>{button.label}</div>
            })}
          </div>
        </div>
      </div>
    )
  }

  getButtons() {
    if ( !this.props.buttons ) {
      return [
        { color: 'positive', handler: this.props.onApprove, label: this.props.approveButtonLabel },
        { color: 'negative', handler: this.props.onCancel, label: this.props.cancelButtonLabel }
      ]
    } else {
      return this.props.buttons
    }
  }

  dimmerClick(e) {
    if ( this.props.closeable && e.target === this.refs.modalDimmer )
      this.props.onClose()
  }

  componentDidMount() {
    this.setState({
      top: (this.refs.modalWindow.offsetHeight / 2) * -1
    })
  }
}
