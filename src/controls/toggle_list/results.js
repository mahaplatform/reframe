import Format from '../../utils/format'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Results extends React.Component {
  
  static propTypes = {
    format: PropTypes.any,
    chosen: PropTypes.any,
    multiple: PropTypes.bool,
    records: PropTypes.array,
    text: PropTypes.string,
    value: PropTypes.string,
    onToggleRecord: PropTypes.func
  }
  
  render() {
    const { format, multiple, records, text } = this.props
    return (
      <div className="reframe-search-results">
        { records.map((record, index) => (
          <div key={`record_${index}`} className={ this._getRecordClass(record) } onClick={ this._handleToggleRecord.bind(this, record) }>
            { multiple &&
              <div className="reframe-search-item-icon">
                <i className={ `fa fa-fw fa-${this._getIcon(record)}` } />
              </div>
            }
            <div className="reframe-search-item-label">
              <Format format={ format } { ...record } value={ _.get(record, text) } />
            </div>
            <div className="reframe-search-item-icon">
              { this._getChecked(record) && <i className="fa fa-fw fa-check" /> }
            </div>
          </div>
        )) }
      </div>
    )
  }

  _getRecordClass(record) {
    const classes = ['reframe-search-item']
    if(this._getChecked(record)) classes.push('checked')
    return classes.join(' ')
  }

  _getChecked(record) {
    const { chosen } = this.props
    const value = this.props.value || 'id'
    return _.find(chosen, { [value]: _.get(record, value) })
  }

  _getIcon(record) {
    const checked = this._getChecked(record)
    if(checked) return 'check-circle'
    return 'circle-o'
  }

  _handleToggleRecord(record) {
    this.props.onToggleRecord(record)
  }

}

export default Results
