import React from 'react'
import ReactDOM from 'react-dom'

const noop = () => {}

export class PlainWindow extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    onApprove: noop,
    onCancel: noop,
    onClose: noop,
    closeable: true
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
          {this.props.children}
        </div>
      </div>
    )
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
