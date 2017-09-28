import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import Fields from './fields'
import Select from '../../filters/select'
import DateRange from '../../filters/daterange'

class Panel extends React.Component {

  static contextTypes = {
    tray: PropTypes.object
  }

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
          { active !== null && fields[active] &&
            <CSSTransition classNames='stack' timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
              <div className="reframe-filter-panel">
                <div className="reframe-filter-header">
                  <div className="reframe-filter-header-back" onClick={ this._handleBack.bind(this) }>
                    <i className="chevron left icon" />
                    Back
                  </div>
                  <div className="reframe-filter-header-title">
                    { fields[active].label }
                  </div>
                  <div className="reframe-filter-header-next" onClick={ this._handleDone.bind(this) }>
                    Done
                  </div>
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

  _handleDone() {
    this.context.tray.close()
  }

  _handleReset() {
    const { active, fields } = this.props
    this.props.onReset(fields[active].name)
  }

}

const mapStateToProps = state => state.reframe.filters

export default connect(mapStateToProps)(Panel)
