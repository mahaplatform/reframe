import Format from '../../utils/format'
import PropTypes from 'prop-types'
import Search from './search'
import React from 'react'
import _ from 'lodash'

class Lookup extends React.Component {

  static contextTypes = {
    form: PropTypes.object
  }

  static propTypes = {
    active: PropTypes.any,
    defaultValue: PropTypes.any,
    endpoint: PropTypes.string,
    format: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func
    ]),
    label: PropTypes.string,
    multiple: PropTypes.bool,
    options: PropTypes.array,
    selected: PropTypes.array,
    text: PropTypes.string,
    tabIndex: PropTypes.number,
    value: PropTypes.string,
    onBegin: PropTypes.func,
    onChange: PropTypes.func,
    onEnd: PropTypes.func,
    onFetch: PropTypes.func,
    onReady: PropTypes.func,
    onRemove: PropTypes.func,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    format: ({ value }) => <div className="reframe-lookup2-token">{ value }</div>,
    label: 'Record',
    multiple: false,
    value: 'value',
    text: 'text'
  }

  render() {
    const { selected, tabIndex, format, text } = this.props
    return (
      <div className={ this._getClass() } tabIndex={ tabIndex }>
        <div className="reframe-lookup2-items" onClick={ this._handleBegin.bind(this) }>
          { selected.map((item, index) => (
            <div className="reframe-lookup2-item" key={ `selected_${index}` }>
              <div className="reframe-lookup2-item-content">
                <div className="reframe-lookup2-item-token">
                  <Format { ...item } format={ format } value={ _.get(item, text) } />
                </div>
                <div className="reframe-lookup2-item-remove" onClick={ this._handleRemove.bind(this, index) }>
                  <i className="fa fa-fw fa-times-circle" />
                </div>
              </div>
            </div>
          )) }
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, endpoint, multiple, value, onFetch, onReady } = this.props
    const query = value === 'id' ? { $ids: defaultValue } : { $filter: { [value]: { $in: defaultValue } } }
    if(defaultValue && (!multiple || defaultValue.length > 0)) onFetch(endpoint, query)
    onReady()
  }

  componentDidUpdate(prevProps) {
    const { form } = this.context
    const { active, selected } = this.props
    if(!prevProps.active && active) form.push(<Search { ...this._getSearch() } />)
    if(prevProps.active && !active) form.pop()
    if(!_.isEqual(selected, prevProps.selected)) {
      this._handleChange()
    }
  }

  _getClass() {
    const { multiple } = this.props
    const classes = ['reframe-lookup2-field']
    if(multiple) classes.push('multiple')
    return classes.join(' ')
  }

  _getSearch() {
    const { endpoint, format, label, multiple, options, selected, text, value } = this.props
    return {
      endpoint,
      format,
      label,
      multiple,
      options,
      selected,
      text,
      value,
      onCancel: this._handleEnd.bind(this),
      onDone: this._handleEnd.bind(this),
      onSelect: this._handleSelect.bind(this)
    }
  }
  
  _getValue() {
    const { multiple, selected, value } = this.props
    const values = selected.map(item => _.get(item, value))
    return multiple ? values : values[0]    
  }

  _handleBegin() {
    this.props.onBegin()
  }

  _handleEnd() {
    this.props.onEnd()
  }

  _handleRemove(index, e) {
    e.stopPropagation()
    this.props.onRemove(index)
  }

  _handleSelect(items) {
    const { onSelect } = this.props
    onSelect(items)
  }

  _handleChange() {
    const { onChange } = this.props
    return onChange(this._getValue())
  }

}

export default Lookup
