import { TransitionGroup, CSSTransition } from 'react-transition-group'
import DateRange from '../../filters/daterange'
import Select from '../../filters/select'
import PropTypes from 'prop-types'
import Fields from './fields'
import React from 'react'
import _ from 'lodash'

class Filters extends React.Component {

  static propTypes = {
    active: PropTypes.number,
    fields: PropTypes.array,
    path: PropTypes.array,
    q: PropTypes.string,
    results: PropTypes.object,
    state: PropTypes.string,
    onBack: PropTypes.func,
    onChange: PropTypes.func,
    onChoose: PropTypes.func,
    onReset: PropTypes.func,
    onResetAll: PropTypes.func,
    onRestart: PropTypes.func,
    onUpdate: PropTypes.func
  }

  render() {
    const { active, fields } = this.props
    return (
      <div className="reframe-filter">
        <Fields { ...this._getFields() } />
        <TransitionGroup>
          { active !== null && fields[active] &&
            <CSSTransition classNames='stack' timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
              <div className="reframe-filter-panel">
                <div className="reframe-filter-header" onClick={ this._handleBack.bind(this) }>
                  <div className="reframe-filter-header-icon">
                    <i className="chevron left icon" />
                  </div>
                  <div className="reframe-filter-header-title">
                    { fields[active].label }
                  </div>
                  <div className="reframe-filter-header-icon" />
                </div>
                <div className="reframe-filter-body">
                  { fields[active].type === 'select' && <Select { ...this._getSelect() } /> }
                  { fields[active].type === 'daterange' && <DateRange { ...this._getDateRange() } />}
                </div>
                <div className="reframe-filter-footer" onClick={ this._handleReset.bind(this) }>
                  Reset { fields[active].label }
                </div>
              </div>
            </CSSTransition>
          }
        </TransitionGroup>
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    const { results } = this.props
    if(!_.isEqual(results, prevProps.results)) this._handleChange()
  }

  componentWillUnmount() {
    this.props.onRestart()
  }

  _getFields() {
    const { fields, results, onChoose, onResetAll } = this.props
    return {
      fields,
      results,
      onChoose,
      onResetAll
    }
  }

  _getSelect() {
    const { active, fields, q, results, onChoose, onReset, onUpdate } = this.props
    return { ...fields[active], q, results, onChoose, onReset, onUpdate }
  }

  _getDateRange() {
    const { active, fields, q, results, onChoose, onReset, onUpdate } = this.props
    return { ...fields[active], q, results, onChoose, onReset, onUpdate }
  }

  _handleBack() {
    this.props.onBack()
  }

  _handleChange() {
    const { results, onChange } = this.props
    const filters = Object.keys(results).reduce((filters, key) => ({
      ...filters,
      [key]: this._getValue(key)
    }), {})
    onChange(filters)
  }

  _getValue(key) {
    const { results, fields } = this.props
    const field = _.find(fields, { name: key })
    const value = results[key]
    if(field.type === 'daterange') return { $dr: value.key }
    if(_.isArray(value)) return { $in: value.map(item => item.key) }
    return { $eq: value.key }
  }

  _handleReset() {
    const { active, fields } = this.props
    this.props.onReset(fields[active].name)
  }

}

export default Filters
