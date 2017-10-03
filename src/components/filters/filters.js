import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import Overview from './overview'
import React from 'react'
import _ from 'lodash'

class Filters extends React.Component {

  static propTypes = {
    filters: PropTypes.array,
    panels: PropTypes.array,
    results: PropTypes.object,
    onAddPanel: PropTypes.func,
    onChange: PropTypes.func,
    onUpdate: PropTypes.func,
    onRemovePanel: PropTypes.func
  }

  render() {
    const { panels } = this.props
    return (
      <div className="reframe-filters">
        <Overview { ...this.props } />
        <TransitionGroup>
          { panels.map((panel, index) => (
            <CSSTransition key={ `filter_panel_${index}` } classNames="slide" timeout={ 500 }>
              { React.cloneElement(panel, { ...this._getPanel(), key: `filter_panel_${index}` }) }
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    const { results } = this.props
    if(!_.isEqual(prevProps.results, results)) this._handleChange()
  }

  _getPanel() {
    const { results, onChange, onRemovePanel } = this.props
    return {
      results,
      onChange,
      onRemovePanel
    }
  }

  _handleChange() {
    const { results, onUpdate } = this.props
    const filters = Object.keys(results).reduce((filters, key) => ({
      ...filters,
      [key]: this._getValue(key)
    }), {})
    onUpdate(filters)
  }

  _getValue(key) {
    const { results, filters } = this.props
    const field = _.find(filters, { name: key })
    if(!field) return null
    const value = results[key]
    if(field.type === 'daterange') return { $dr: value.key }
    if(_.isArray(value)) return { $in: value.map(item => item.key) }
    return { $eq: value.key }
  }

}

export default Filters
