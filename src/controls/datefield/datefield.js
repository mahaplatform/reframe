import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import Chooser from './chooser'
import moment from 'moment'
import React from 'react'

class Datefield extends React.Component {

  static contextTypes = {
    modal: PropTypes.object
  }

  static propTypes = {
    active: PropTypes.bool,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    month: PropTypes.number,
    prompt: PropTypes.string,
    tabIndex: PropTypes.number,
    year: PropTypes.number,
    value: PropTypes.any,
    onBegin: PropTypes.func,
    onBusy: PropTypes.func,
    onClear: PropTypes.func,
    onChange: PropTypes.func,
    onChoose: PropTypes.func,
    onNext: PropTypes.func,
    onPrevious: PropTypes.func,
    onReady: PropTypes.func,
    onSetCurrent: PropTypes.func,
    onSetValue: PropTypes.func
  }

  static defaultProps = {
    defaultValue: null,
    disabled: false,
    prompt: 'Choose a date',
    tabIndex: 0,
    onBusy: () => {},
    onChange: () => {},
    onReady: () => {},
    onSet: () => {}
  }

  render() {
    const { active, prompt, value, tabIndex } = this.props
    return (
      <div className="reframe-datefield">
        <div className="reframe-datefield-input" tabIndex={ tabIndex }>
          <div className="reframe-datefield-field" onClick={ this._handleBegin.bind(this) }>
            { value ? value.format('dddd, MMMM DD, YYYY') : <span>{ prompt }</span> }
          </div>
          { value  &&
            <div className="reframe-datefield-remove" onClick={ this._handleClear.bind(this) }>
              <i className="remove circle icon" />
            </div>
          }
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady, onSetCurrent, onSetValue } = this.props
    if(defaultValue) onSetValue(moment(defaultValue))
    const current = defaultValue ? moment(defaultValue) : moment()
    onSetCurrent(parseInt(current.format('MM')) - 1, parseInt(current.format('YYYY')))
    onReady()
  }

  componentDidUpdate(prevProps) {
    const { active, value, onChange } = this.props
    const { modal } = this.context
    if(active !== prevProps.active) {
      if(active) {
        modal.push(<Chooser { ...this._getChooser() } />)
      } else  {
        modal.pop()
      }
    } else if(prevProps.value !== value) {
      if(value) {
        onChange(value.format('YYYY-MM-DD'))
      } else  {
        onChange(value)
      }
    }
  }

  _getInput() {
    const { prompt, value } = this.props
    return {
      type: 'text',
      value,
      autoComplete: false,
      prompt
    }
  }
  
  _getChooser() {
    return this.props
  }

  _handleBegin() {
    this.props.onBegin()
  }

  _handleClear() {
    this.props.onClear()
  }

}

export default Datefield
