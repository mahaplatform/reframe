import React, {Component} from 'react';
import ReactDOM from 'react-dom'

export default class Confirm extends Component {

  static defaultProps = {
    onApprove: () => {},
    onCancel: () => {},
    message: 'Are you sure?'
  }

  render() {
    return(
      <div className="ui dimmer modals visible active page transition">
        <div ref="modalWindow" style={this.getStyle()} className="ui small modal animating transition active" key={'collection_confirmation'}>
          <div className="header">Confirm</div>
          <div className="content">
            <p>{this.props.message}</p>
          </div>
          <div className="actions">
            <div className="ui negative button" onClick={this.cancel.bind(this)}>Cancel</div>
            <div className="ui positive button" onClick={this.approve.bind(this)}>Delete</div>
          </div>
        </div>
      </div>
    )
  }

  getStyle() {
    return {
      marginTop: `-90px`,
      height: '180px'
    }
  }

  approve() {
    this.props.onApprove()
  }

  cancel() {
    this.props.onCancel()
  }

}
