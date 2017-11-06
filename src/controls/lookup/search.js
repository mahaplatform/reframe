import React from 'react'
import PropTypes from 'prop-types'
import Options from './options'

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
         <div className="reframe-modal-panel-header-cancel" onClick={ this._handleCancel.bind(this) }>
           <i className="chevron left icon" />
           Cancel
         </div>
         <div className="reframe-modal-panel-header-title">
           Choose {label}
         </div>
         <div className="reframe-modal-panel-header-proceed" />
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

export default Search
