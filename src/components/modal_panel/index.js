import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class ModalPanel extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    leftItems: PropTypes.array,
    rightItems: PropTypes.array,
    title: PropTypes.string
  }

  render() {
    const { leftItems, rightItems, title } = this.props
    return (
      <div className={ this._getClass() }>
        <div className="reframe-modal-panel-header">
          { leftItems &&
            <div className="reframe-modal-panel-header-navigation">
              { leftItems.map((item,index) => (
                <div key={`left_${index}`} className="reframe-modal-panel-header-navigation-link" onClick={ item.handler }>
                  { item.component && ( _.isFunction(item.component) ? React.createElement(item.component) : item.component) }
                  { item.icon && <i className={`fa fa-fw fa-${item.icon}`} /> }
                  { item.label && <span>{item.label}</span> }
                </div>
              )) }
            </div>
          }
          { title &&
            <div className="reframe-modal-panel-header-title">
              { title }
            </div>
          }
          { rightItems &&
            <div className="reframe-modal-panel-header-navigation">
              { rightItems.map((item,index) => (
                <div key={`right_${index}`} className="reframe-modal-panel-header-navigation-link" onClick={ item.handler }>
                  { item.component && ( _.isFunction(item.component) ? React.createElement(item.component) : item.component) }
                  { item.icon && <i className={`fa fa-fw fa-${item.icon}`} /> }
                  { item.label && <span>{item.label}</span> }
                </div>
              )) }
            </div>
          }
        </div>
        <div className="reframe-modal-panel-body">
          { this.props.children }
        </div>
      </div>
    )
  }

  _getClass() {
    const { className } = this.props
    const classes = ['reframe-modal-panel']
    if(className) classes.push(className)
    return classes.join(' ')
  }

  _getLeftClass() {
    const { leftEnabled } = this.props
    const classes = ['reframe-modal-panel-header-navigation']
    if(!leftEnabled) classes.push('disabled')
    return classes.join(' ')
  }

  _getRightClass() {
    const { rightEnabled } = this.props
    const classes = ['reframe-modal-panel-header-navigation']
    if(!rightEnabled) classes.push('disabled')
    return classes.join(' ')
  }

}

export default ModalPanel
