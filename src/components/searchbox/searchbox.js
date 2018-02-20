import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Searchbox extends React.Component {

  static propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.string,
    prompt: PropTypes.string,
    q: PropTypes.string,
    onAbort: PropTypes.func,
    onBegin: PropTypes.func,
    onChange: PropTypes.func,
    onEnd: PropTypes.func,
    onIcon: PropTypes.func,
    onType: PropTypes.func
  }

  static defaultProps = {
    prompt: 'Search...',
    q: '',
    onChange: (value) => {}
  }

  render() {
    const { icon, q } = this.props
    return (
      <div className={ this._getClass() }>
        <div className="reframe-searchbox-container">
          { icon && 
            <div className="reframe-searchbox-extra" onClick={ this._handleIcon.bind(this) }>
              <i className={ `fa fa-fw fa-${icon}` } />
            </div>
          }
          <div className="reframe-searchbox-input">
            <div className="reframe-searchbox-icon">
              <i className="fa fa-search" />
            </div>
            <div className="reframe-searchbox-field">
              <input { ...this._getInput() } />
            </div>
            { q.length > 0 &&
              <div className="reframe-searchbox-remove-icon" onClick={ this._handleAbort.bind(this) }>
                <i className="fa fa-times-circle" />
              </div>
            }
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this._handleChange = _.throttle(this.props.onChange, 500)
  }

  _getClass() {
    const classes = ['reframe-searchbox']
    if(this.props.active) classes.push('active')
    return classes.join(' ')
  }

  _getInput() {
    const { prompt, q } = this.props
    return {
      type: 'text',
      placeholder: prompt,
      value: q,
      onFocus: this._handleBegin.bind(this),
      onBlur: this._handleEnd.bind(this),
      onChange: this._handleType.bind(this)
    }
  }

  componentDidUpdate(prevProps) {
    const { q } = this.props
    if(q !== prevProps.q) this._handleChange(q)
  }
  
  _handleIcon() {
    this.props.onIcon()
  }

  _handleBegin() {
    this.props.onBegin()
  }

  _handleEnd() {
    this.props.onEnd()
  }

  _handleType(e) {
    const { onType } = this.props
    onType(e.target.value)
  }

  _handleAbort() {
    this.props.onAbort()
  }

}

export default Searchbox
