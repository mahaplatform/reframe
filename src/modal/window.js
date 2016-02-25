import React from 'react'
import ReactDOM from 'react-dom'

const noop = () => {}

export default class Window extends React.Component {
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
      <div ref="modalDimmer" className="ui dimmer modals visible active page transition" onClick={this.dimmerClick.bind(this)}>
        <div ref="modalWindow" style={{marginTop: this.state.top}} className="ui small modal animating transition active" key={'collection_confirmation'}>
          {this.props.closeable ? <i className="close icon" onClick={this.props.onClose}/> : null }
          <div className="header">{this.props.title}</div>
          <div className="content">
            {this.props.children}
          </div>
          <div className="actions">
            <div className="ui negative button" onClick={this.props.onCancel}>Cancel</div>
            <div className="ui positive button" onClick={this.props.onApprove}>Continue</div>
          </div>
        </div>
      </div>
    )
  }

  dimmerClick(e) {
    if(this.props.closeable && e.target === this.refs.modalDimmer)
      this.props.onClose()
  }

  componentDidMount() {
    this.setState({
      top: (this.refs.modalWindow.offsetHeight / 2) * -1
    })
  }
}
