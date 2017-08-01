import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import Fields from './fields'
import Select from './select'
import DateRange from './daterange'

class Panel extends React.Component {

  static propTypes = {
    active: PropTypes.number,
    fields: PropTypes.array,
    path: PropTypes.array,
    q: PropTypes.string,
    results: PropTypes.object,
    state: PropTypes.string,
    onBack: PropTypes.func,
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
          { active !== null && fields[active] && fields[active].type === 'select' &&
            <CSSTransition classNames='stack' timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
              <Select { ...this._getSelect() } />
            </CSSTransition>
          }
          { active !== null && fields[active] && fields[active].type === 'daterange' &&
            <CSSTransition classNames='stack' timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
              <DateRange { ...this._getDateRange() } />
            </CSSTransition>
          }
        </TransitionGroup>
      </div>
    )
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
    const { active, fields, q, results, onBack, onChoose, onReset, onUpdate } = this.props
    return {
      ...fields[active],
      q,
      results,
      onBack,
      onChoose,
      onReset,
      onUpdate
    }
  }

  _getDateRange() {
    const { active, fields, q, results, onBack, onChoose, onReset, onUpdate } = this.props
    return {
      ...fields[active],
      q,
      results,
      onBack,
      onChoose,
      onReset,
      onUpdate
    }
  }

  _firstChild(props) {
    const childrenArray = React.Children.toArray(props.children)
    return childrenArray[0] || null
  }

}

const mapStateToProps = state => state.reframe.filter

export default connect(mapStateToProps)(Panel)
