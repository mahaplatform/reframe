
import React from 'react'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-addons-css-transition-group'

export class Flash extends React.Component {

  static childContextTypes = {
    flash: PropTypes.object
  }

  static propTypes = {
    message: PropTypes.string,
    style: PropTypes.string,
    onSet: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  }

  render() {
    const { children, message, style } = this.props
    return (
      <div className="chrome-flash">
        { children }
        <CSSTransitionGroup transitionName="expanded" transitionEnterTimeout={250} transitionLeaveTimeout={250}>
          {message &&
            <div className={`chrome-flash-popup ${style}`} key={`flash_${message}`}>
              <p>
                { this._getIcon(style) }
                { message }
              </p>
            </div>
          }
        </CSSTransitionGroup>
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    const { message, onClear } = this.props
    if(prevProps.message !== message && message) {
      window.setTimeout(onClear , 2000)
    }
  }

  _getIcon(style) {
    if(style == 'success') {
      return <i className="fa fa-check-circle" />
    } else if(style == 'info') {
      return <i className="fa fa-info-circle" />
    } else if(style == 'warning') {
      return <i className="fa fa-warning" />
    } else if(style == 'error') {
      return <i className="fa fa-times-circle" />
    }
  }

  getChildContext() {
    const { onSet, onClear } = this.props
    return {
      flash: {
        set: onSet,
        clear: onClear
      }
    }
  }

}

export default Flash
