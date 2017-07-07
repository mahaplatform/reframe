import React from 'react'
import Options from './options'

class Search extends React.Component {

  render() {
    const { label, results, status, selected, text, form, format } = this.props
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
    this.props.onCancel()
  }

}

export default Search
