import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import Fields from './fields'
import Select from './select'
import DateRange from './daterange'

class Panel extends React.Component {

  static propTypes = {
    fields: PropTypes.array,
    path: PropTypes.array,
    state: PropTypes.string
  }

  render() {
    const { active, fields } = this.props
    return (
      <div className="reframe-filter">
        <Fields { ...this._getFields() } />
        <CSSTransitionGroup transitionName='stack' component={ this._firstChild } transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }>
          { active !== null && fields[active].type === 'select' && <Select { ...this._getSelect() } /> }
          { active !== null && fields[active].type === 'daterange' && <DateRange { ...this._getDateRange() } /> }
        </CSSTransitionGroup>
      </div>
    )
  }

  componentWillUnmount() {
    this.props.onRestart()
  }

  _getFields() {
    return {
      fields: this.props.fields,
      results: this.props.results,
      onChoose: this.props.onChoose,
      onResetAll: this.props.onResetAll
    }
  }

  _getSelect() {
    return {
      ...this.props.fields[this.props.active],
      q: this.props.q,
      query: this.props.query,
      results: this.props.results,
      onBack: this.props.onBack,
      onAbort: this.props.onAbort,
      onType: this.props.onType,
      onLookup: this.props.onLookup,
      onUpdate: this.props.onUpdate,
      onReset: this.props.onReset
    }
  }

  _getDateRange() {
    return {
      ...this.props.fields[this.props.active],
      q: this.props.q,
      query: this.props.query,
      results: this.props.results,
      onBack: this.props.onBack,
      onAbort: this.props.onAbort,
      onType: this.props.onType,
      onLookup: this.props.onLookup,
      onUpdate: this.props.onUpdate,
      onReset: this.props.onReset
    }
  }

  _firstChild(props) {
    const childrenArray = React.Children.toArray(props.children)
    return childrenArray[0] || null
  }

}

const mapStateToProps = state => state.reframe.filter

export default connect(mapStateToProps)(Panel)
