import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.currentModalRef = null;
  }

  render() {
    let M = this.props.currentModal;
    let sub = this.props.modalSubscriber;
    let cfg = this.props.modalConfig;
    return (
      <ReactCSSTransitionGroup
        transitionEnterTimeout={500}
        transitionLeaveTimeout={30000}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionName={ {
          enter: 'scale-transition-in',
          enterActive: '',
          appear: 'scale-transition-in',
          appearActive: '',
          leave: 'scale-transition-out',
          leaveActive: ''
        } }
        component="div">
        {M ? <M key="MODAL_WINDOW_K" subscriber={sub} {...cfg} /> : <div key="MODAL_WINDOW_K"></div>}
      </ReactCSSTransitionGroup>
    )
  }
}
