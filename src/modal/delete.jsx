import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import _ from 'lodash'

export default class Confirm extends Component {

  static defaultProps = {
    onApprove: () => {},
    onCancel: () => {},
    message: 'Are you sure you want to delete this #{item}?'
  }

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="ui dimmer modals visible active page transition">
        <div ref="modalWindow" style={this.getStyle()} className="ui small modal animating transition active" key={'collection_confirmation'}>
          <div className="header">Confirm Deletion</div>
          <div className="content">
            <p>{this.getMessage()}</p>
          </div>
          <div className="actions">
            <div className="ui negative button" onClick={this.cancel.bind(this)}>Cancel</div>
            <div className="ui positive button" onClick={this.approve.bind(this)}>Delete</div>
          </div>
        </div>
      </div>
    )
  }

  getMessage() {
    return _.template(this.props.message)({item: this.props.resource})
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
