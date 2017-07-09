import React from 'react'
import PropTypes from 'prop-types'
import Collection from '../collection'
import _ from 'lodash'

class ToggleList extends React.Component {

  static PropTypes = {
    chosen: PropTypes.array,
    component: PropTypes.func,
    endpoint: PropTypes.string,
    sort: PropTypes.string,
    onChange: PropTypes.func
  }

  render() {
    return (
      <div className="toggle_list">
        <Collection { ...this._getCollection() } />
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onSet } = this.props
    if(defaultValue) {
      onSet(defaultValue)
    }
  }

  componentDidUpdate(prevProps) {
    const { chosen, onChange } = this.props
    if(prevProps.chosen.length !== chosen.length) {
      onChange(chosen)
    }
  }

  _getCollection() {
    const { filters, sort, endpoint } = this.props
    return {
      endpoint,
      filters,
      layout: this._getLayout(),
      sort
    }
  }

  _getLayout() {
    const { chosen, component } = this.props
    return ({ records }) => (
      <div className="reframe-search-results">
        { records.map((record, index) => {
          const checked = _.includes(chosen, record.id)
          return (
            <div key={`record${index}`} className="reframe-search-result" onClick={ this._handleToggle.bind(this, record.id) }>
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

  _handleToggle(record) {
    const { onToggle } = this.props
    onToggle(record)
  }

}

export default ToggleList
