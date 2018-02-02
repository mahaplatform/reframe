import React from 'react'
import PropTypes from 'prop-types'
import Search from './search'
import _ from 'lodash'

class Lookup extends React.Component {

  static contextTypes = {
    form: PropTypes.object
  }

  static propTypes = {
    endpoint: PropTypes.string,
    format: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func
    ]),
    label: PropTypes.string,
    multiple: PropTypes.bool,
    selected: PropTypes.array,
    text: PropTypes.string,
    tabIndex: PropTypes.number,
    onFetch: PropTypes.func,
    onReady: PropTypes.func,
    onRemove: PropTypes.func,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    label: 'Record',
    multiple: false
  }

  render() {
    const { selected, tabIndex } = this.props
    return (
      <div className={ this._getClass() } tabIndex={ tabIndex }>
        <div className="reframe-lookup2-items" onClick={ this._handleBegin.bind(this) }>
          { selected.map((item, index) => (
            <div className="reframe-lookup2-item" key={ `selected_${index}` }>
              <div className="reframe-lookup2-item-content">
                <div className="reframe-lookup2-item-token">
                  <div className="reframe-lookup2-token">
                    { _.get(item, 'full_name') }
                  </div>
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

  _getClass() {
    const { multiple } = this.props
    const classes = ['reframe-lookup2-field']
    if(multiple) classes.push('multiple')
    return classes.join(' ')
  }

  componentDidMount() {
    const { defaultValue, endpoint, onFetch, onReady } = this.props
    if(defaultValue) onFetch(endpoint, { $ids: defaultValue })
    onReady()
  }

  componentDidUpdate(prevProps) {
    const { form } = this.context
    const { active, selected, onChange } = this.props
    if(!prevProps.active && active) form.push(<Search { ...this._getSearch() } />)
    if(prevProps.active && !active) form.pop()
    if(!_.isEqual(selected, prevProps.selected)) this._handleChange()
  }

  _getSearch() {
    const { endpoint, format, label, multiple, selected, text } = this.props
    return {
      endpoint,
      format,
      label,
      multiple,
      selected,
      text,
      onCancel: this._handleEnd.bind(this),
      onDone: this._handleEnd.bind(this),
      onSelect: this._handleSelect.bind(this)
    }
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
    const { onEnd, onSelect } = this.props
    onSelect(items)
  }

  _handleChange() {
    const { selected, onChange } = this.props
    return onChange(selected.map(item => _.get(item, 'id')))
  }

}

export default Lookup
