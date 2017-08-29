import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

class Chooser extends React.Component {

  static propTypes = {
    month: PropTypes.number,
    value: PropTypes.any,
    year: PropTypes.number,
    onCancel: PropTypes.func,
    onChoose: PropTypes.func,
    onNext: PropTypes.func,
    onPrevious: PropTypes.func,
    onSetCurrent: PropTypes.func
  }

  render() {
    const { month, value, year } = this.props
    const current = { month, year, day: '01'}
    const start = moment(current).startOf('month')
    const end = moment(current).endOf('month')
    const date = moment(current).startOf('week').subtract(1, 'day')
    const today = moment()
    return (
      <div className="reframe-modal-panel">
       <div className="reframe-modal-panel-header">
         <div className="reframe-modal-panel-header-cancel" onClick={ this._handleCancel.bind(this) }>
           <i className="chevron left icon" />
           Cancel
         </div>
         <div className="reframe-modal-panel-header-title">
           Choose Date
         </div>
         <div className="reframe-modal-panel-header-proceed" />
       </div>
       <div className="reframe-modal-panel-body">
         <div className="reframe-datefield-chooser">
           <div className="reframe-datefield-month">
             <div className="reframe-datefield-header">
               <div className="reframe-datefield-previous" onClick={ this._handlePrevious.bind(this)}>
                 <i className="left chevron icon" />
               </div>
               <div className="reframe-datefield-title">
                 { moment(current).format('MMMM YYYY').toUpperCase() }
               </div>
               <div className="reframe-datefield-next" onClick={ this._handleNext.bind(this)}>
                 <i className="right chevron icon" />
               </div>
             </div>
             <div className="reframe-datefield-weekdays">
               <div className="reframe-datefield-weekday">Sun</div>
               <div className="reframe-datefield-weekday">Mon</div>
               <div className="reframe-datefield-weekday">Tue</div>
               <div className="reframe-datefield-weekday">Wed</div>
               <div className="reframe-datefield-weekday">Thu</div>
               <div className="reframe-datefield-weekday">Fri</div>
               <div className="reframe-datefield-weekday">Sat</div>
             </div>
             { [...Array(6)].map((week, i) => (
               <div key={`datefield_week_${i}`} className="reframe-datefield-week">
                 { [...Array(7)].map((day, j) => {
                   date.add('1', 'days')
                   const classes = ['reframe-datefield-day']
                   if(date.isBefore(start, 'day') || date.isAfter(end, 'day')) classes.push('notmonth')
                   if(date.isSame(value, 'day')) classes.push('selected')
                   if(date.isSame(today, 'day')) classes.push('today')
                   return (
                     <div key={`datefield_day_${i}_${j}`} className={ classes.join(' ')} onClick={ this._handleChoose.bind(this, moment(date)) }>
                       { date.format('DD') }
                     </div>
                   )
                 }) }
               </div>
             )) }
           </div>
         </div>
       </div>
     </div>
    )
  }

  _handleChoose(value) {
    const { onChoose, onSetCurrent } = this.props
    onSetCurrent(parseInt(value.format('MM')) - 1, parseInt(value.format('YYYY')))
    onChoose(value)
  }

  _handleCancel() {
    this.props.onCancel()
  }

  _handlePrevious() {
    this.props.onPrevious()
  }

  _handleNext() {
    this.props.onNext()
  }

}

export default Chooser
