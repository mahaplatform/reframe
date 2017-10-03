import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class LookupPanel extends React.Component {

  static propTypes = {
    format: PropTypes.function,
    label: PropTypes.string,
    multiple: PropTypes.bool,
    name: PropTypes.string,
    options: PropTypes.array,
    results: PropTypes.object,
    onChange: PropTypes.func,
    onRemovePanel: PropTypes.func
  }

  render() {
    const { format, label, multiple, name, options, results } = this.props
    const value = results[name]
    return (
      <div className="reframe-filters-panel">
        <div className="reframe-filters-header" onClick={ this._handleRemovePanel.bind(this) }>
          <div className="reframe-filters-header-icon">
            <i className="fa fa-chevron-left" />
          </div>
          <div className="reframe-filters-header-title">
            { label }
          </div>
          <div className="reframe-filters-header-icon" />
        </div>
        <div className="reframe-filters-body">
          { options.map((option, index) => (
            <div className="reframe-filters-item" key={`filter_item_${index}`} onClick={ this._handleClick.bind(this, option.id) }>
              <div className="reframe-filters-item-content">
                { React.createElement(format, { option }) }
              </div>
              <div className="reframe-filters-item-icon">
                { multiple && _.includes(value, option.id) && <i className="fa fa-check" /> }
                { !multiple && option.id === value && <i className="fa fa-check" /> }
              </div>
            </div>
          ))}
        </div>
        <div className="reframe-filters-footer" onClick={ this._handleReset.bind(this) }>
          Reset { label }
        </div>
      </div>
    )
  }

  _getValue(id) {
    const { multiple, name, results } = this.props
    if(!multiple) return results[name] !== id ? id : null
    if(_.includes(results[name], id)) return _.without(results[name], id)
    return [ ...results[name], id ]
  }

  _handleClick(id) {
    const { name, onChange } = this.props
    onChange(name, this._getValue(id))
  }

  _handleRemovePanel() {
    this.props.onRemovePanel()
  }

  _handleReset() {
    const { multiple, name, onChange } = this.props
    const value = multiple ? [] : null
    onChange(name, value)
  }

}

class Lookup extends React.Component {

  static propTypes = {
    format: PropTypes.func,
    label: PropTypes.string,
    multiple: PropTypes.bool,
    name: PropTypes.string,
    options: PropTypes.array,
    results: PropTypes.object,
    value: PropTypes.number,
    onAddPanel: PropTypes.func,
    onChange: PropTypes.func,
    onRemovePanel: PropTypes.func
  }

  static defaultProps = {
    mutiple: false
  }

  render() {
    const { label } = this.props
    return (
      <div className="reframe-filters-item" onClick={ this._handleClick.bind(this) }>
        <div className="reframe-filters-item-title">
          { label }
        </div>
        <div className="reframe-filters-item-icon">
          <i className="fa fa-chevron-right" />
        </div>
      </div>
    )
  }

  _handleClick() {
    this.props.onAddPanel(<LookupPanel { ...this._getLookupPanel() } />)
  }

  _getLookupPanel() {
    const { format, label, multiple, name, options, results, onChange, onRemovePanel } = this.props
    return { format, label, multiple, name, options, results, onChange, onRemovePanel }
  }


}

export default Lookup
