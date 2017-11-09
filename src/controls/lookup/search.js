import React from 'react'
import PropTypes from 'prop-types'
import Options from './options'
import { connect } from 'react-redux'

class Search extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    label: PropTypes.string,
    selected: PropTypes.number,
    onCancel: PropTypes.func,
    onEnd: PropTypes.func
  }

  render() {
    const { label } = this.props
    return (
      <div className="reframe-modal-panel">
       <div className="reframe-modal-panel-header">
         <div className="reframe-modal-panel-header-navigation" onClick={ this._handleCancel.bind(this) }>
           <i className="chevron left icon" />
           Cancel
         </div>
         <div className="reframe-modal-panel-header-title">
           Choose {label}
         </div>
         <div className="reframe-modal-panel-header-navigation" />
       </div>
       <Options { ...this.props } />
     </div>
    )
  }

  _handleCancel() {
    this.props.onEnd()
    this.context.modal.pop()
  }

}
// since we sent this component up to the modal, we need this to communicate
// back with the parent
const mapStateToProps = (state, props) => ({
  q: state.reframe.lookup[props.cid].q
})

export default connect(mapStateToProps)(Search)
