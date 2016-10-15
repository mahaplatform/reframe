import React from 'react'
import { connect } from 'react-redux'

class Modal extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    open: React.PropTypes.bool
  }

  render() {
    const { title, open, children } = this.props
    if(open) {
      return (
        <div className="modal">
          <div className="ui dimmer modals page transition visible active">
            <div className="ui standard modal media transition visible active scrolling">
              <div className="header">
                {title}
              </div>
              {children}
            </div>
          </div>
        </div>
      )
    } else {
      return <div className="modal" />
    }
  }

}

const mapStateToProps = (state) => ({
  title: state.title,
  open: state.open
})

Modal = connect(mapStateToProps)(Modal)

export default Modal
