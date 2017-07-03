import React from 'react'
import _ from 'lodash'
import Form from '../form'
import Format from '../format'
import Results from './results'

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
         <Infinite { ...this._getInfinite() } />
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

  _getInfinite() {
    const { endpoint, query, sort } = this.props
    const filter = { q: query }
    return {
      endpoint,
      filter,
      layout: (props) => <Results { ...this.props } { ...props } onChoose={ this._handleChoose.bind(this) } />,
      sort
    }
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
    this.context.modal.open(<Form {...this._getForm()} />)
  }

  _getForm() {
    return {
      ...this.props.form,
      onCancel: this.context.modal.close,
      onSuccess: (chosen) => {
        const value = _.get(chosen, this.props.value)
        this.props.onChoose(0)
        this.props.onChange(value)
        this.context.modal.close()
      }
    }

  }

}

export default Search
