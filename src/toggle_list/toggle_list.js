import React from 'react'
import PropTypes from 'prop-types'
import Infinite from '../infinite'
import _ from 'lodash'

class ToggleList extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static PropTypes = {
    chosen: PropTypes.array,
    component: PropTypes.func,
    label: PropTypes.string,
    loadEndpoint: PropTypes.string,
    lookupEndpoint: PropTypes.string,
    query: PropTypes.string,
    saveEndpoint: PropTypes.string,
    sort: PropTypes.string,
    status: PropTypes.string,
    title: PropTypes.string,
    token: PropTypes.string,
    onLoad: PropTypes.func,
    onLookup: PropTypes.func,
    onSave: PropTypes.func
  }

  render() {
    const { chosen, label, query, token, title } = this.props
    return (
      <div className="reframe-modal-panel">
        <div className="reframe-modal-panel-header">
          <div className="reframe-modal-panel-header-cancel" onClick={ this._handleCancel.bind(this) }>
            Cancel
          </div>
          <div className="reframe-modal-panel-header-title">
            { title }
          </div>
          <div className="reframe-modal-panel-header-proceed" onClick={ this._handleSave.bind(this) }>
            Save
          </div>
        </div>
        <div className="reframe-modal-panel-body">
          <div className="reframe-search">
            <div className="reframe-search-form">
              <div className="reframe-search-input">
                <div className="ui input">
                  <input type="text" placeholder={`Find a ${label}...`} onChange={this._handleType.bind(this)} value={ query } ref="query" />
                </div>
                { query.length > 0 && <i className="remove circle icon" onClick={this._handleResetSearch.bind(this)} /> }
              </div>
              { token && chosen.length > 0 &&
                <div className="reframe-search-chosen" ref="chosen">
                  { chosen.map((item, index) => <span key={`chosen_${index}`} onClick={ this._handleTokenClick.bind(this, item[token]) }>{ item[token] }</span>) }
                </div>
              }
            </div>
            <Infinite { ...this._getInfinite() } />
          </div>
        </div>
      </div>

    )
  }

  componentDidMount() {
    this._handleLoad()
  }

  componentDidUpdate(prevProps) {
    const { chosen } = this.props
    if(prevProps.chosen.length !== chosen.length && chosen.length > 0) {
      this.refs.chosen.scrollTop = this.refs.chosen.scrollHeight
    }
  }

  _getInfinite() {
    const { query, sort, lookupEndpoint } = this.props
    const filter = { q: query }
    return {
      empty: this._getEmpty(),
      endpoint: lookupEndpoint,
      filter,
      sort,
      layout: this._getLayout(),
      loading: this._getLoading()
    }
  }

  _getEmpty() {
    const { label } = this.props
    return (
      <div className="reframe-search-empty">
        <div className="reframe-search-empty-message">
          <h2><i className="circular remove icon" /></h2>
          <h3>No Results Found</h3>
          <p>No { label } match your query</p>
        </div>
      </div>
    )
  }

  _getLoading() {
    return (
      <div className="reframe-search-loader">
        <div className="reframe-loader">
          <div className="ui active inverted dimmer">
            <div className="ui large text loader">Loading</div>
          </div>
        </div>
      </div>
    )
  }

  _getLayout() {
    const { chosen, component } = this.props
    return ({ records }) => (
      <div className="reframe-search-results">
        { records.map((record, index) => {
          const checked = _.findIndex(chosen, { id: record.id }) >= 0
          return (
            <div key={`record${index}`} className="reframe-search-result" onClick={ this._handleToggle.bind(this, record) }>
              { _.isFunction(component) ? React.createElement(component, record) : component }
              <div className="reframe-search-result-toggle">
                { checked && <i className="icon green check" /> }
              </div>
            </div>
          )
        }) }
      </div>
    )
  }

  _handleCancel() {
    this.context.modal.close()
  }

  _handleTokenClick(q) {
    this.props.onType(q)
  }

  _handleType(event) {
    this.props.onType(event.target.value)
  }

  _handleResetSearch() {
    this.props.onType('')
  }

  _handleLoad(skip = null) {
    const { loadEndpoint, onLoad } = this.props
    onLoad(loadEndpoint)
  }

  _handleToggle(record) {
    const { onToggle } = this.props
    onToggle(record)
  }

  _handleSave() {
    const { ids, saveEndpoint, onSave } = this.props
    const onSuccess = this.context.modal.close
    const onFailure = () => {}
    onSave(saveEndpoint, ids, onSuccess, onFailure)
  }

}

export default ToggleList
