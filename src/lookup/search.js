import React from 'react'
import _ from 'lodash'
import Form from '../form'
import Format from '../format'
import * as actions from './actions'

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
       <div className="reframe-lookup-panel">
         <div className="reframe-lookup-panel-search">
           <div className="ui form">
             <input type="text" placeholder={`Find a ${label}...`} onChange={this._handleType.bind(this)} ref="query" />
           </div>
         </div>
         { status === 'loading' &&
           <div className="reframe-lookup-panel-loader">
             <div className="reframe-loader">
               <div className="ui active inverted dimmer">
                 <div className="ui large text loader">Loading</div>
               </div>
             </div>
           </div>
         }
         { status === 'success' && results.length === 0 &&
           <div className="reframe-lookup-panel-empty">
             <div className="reframe-lookup-panel-empty-message">
               <h2><i className="circular remove icon" /></h2>
               <h3>No Results Found</h3>
               <p>No {label} match your query</p>
             </div>
           </div>
         }
         { status === 'success' && results.length > 0 &&
           <div className="reframe-lookup-panel-results">
             { results.map((result, index) => {
               const value = _.get(result, text)
               return (
                 <div key={`result_${index}`} className="reframe-lookup-panel-result" onClick={ this._handleChoose.bind(this, index) }>
                   <div className="reframe-lookup-panel-result-label">
                     <Format {...result} format={format} value={value} />
                   </div>
                   <div className="reframe-lookup-panel-result-icon">
                     { index === selected ? <i className="green check icon" /> : null }
                   </div>
                 </div>
               )
             })}
           </div>
         }
         { form &&
           <div className="reframe-lookup-panel-add">
             <div className="ui fluid blue button" onClick={ this._handleAdd.bind(this)}>
               Add {label}
             </div>
           </div>
         }
       </div>
     </div>
    )
  }

  componentDidMount() {
    const { sort, endpoint, onLookup } = this.props
    const refs = this.refs
    this._handleLookup = _.throttle(onLookup.bind(this), 500)
    setTimeout(() => refs.query.focus(), 500)
    const query = { $filter: { q: '' }, $sort: sort }
    onLookup(query, endpoint)
  }

  _handleBegin() {
    this.props.onBegin()
  }

  _handleCancel() {
    this.props.onCancel()
  }

  _handleType(event) {
    const { sort, endpoint } = this.props
    const q = event.target.value
    const params = { $filter: { q }, $sort: sort }
    this.props.onType(q)
    this._handleLookup(params, endpoint)
  }

  _handleChoose(index) {
    const { chosen } = this.props
    const value = _.get(chosen, this.props.value)
    this.props.onChoose(index)
    this.props.onChange(value)
  }

  _handleAdd() {
    this.context.modal.push(<Form {...this._getForm()} />)
  }

  _getForm() {
    return {
      ...this.props.form,
      onCancel: this.context.modal.pop,
      onSuccess: (chosen) => {
        this.props.onChoose(0)
        this.props.onChange(value)
        this.context.modal.pop()
      }
    }

  }

}

export default Search
