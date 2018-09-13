import Format from '../../utils/format'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Item extends React.Component {

  static contextTypes = {
    router: PropTypes.object,
    tasks: PropTypes.object
  }

  render() {
    const { alt, component, content, empty, extra, format, handler, icon, label, link, tasks, units } = this.props
    if(this.props.if === false) return null
    const item = (
      <div className={ this._getClass() }>
        { icon &&
          <div className="reframe-list-item-icon">
            <i className={`fa fa-fw fa-${icon}`} />
          </div>
        }
        { component &&
          <div className="reframe-list-item-component">
            { _.isFunction(component) ? React.createElement(component, content) : component }
          </div>
        }
        { !component &&
          <div className="reframe-list-item-content">
            { label && <div className="reframe-list-item-content-label">{ label }</div> }
            <div className="reframe-list-item-content-value">
              { content && <Format { ...content } format={ format } value={ content } /> }
              { content && units && ` ${units}` }
              { !content && alt && <span>{ alt}</span> }
              { !content && empty && <span className="reframe-list-item-content-empty">{ empty }</span>}
            </div>
          </div>
        }
        { extra &&
          <div className="reframe-list-item-extra">
            { _.isFunction(extra) ? React.createElement(extra, content) : extra }
          </div>
        }
        { (handler || link) &&
          <div className="reframe-list-item-proceed">
            <i className="fa fa-fw fa-chevron-right" />
          </div>
        }
        { tasks &&
          <div className="reframe-list-item-proceed" onClick={ this._handleTasks.bind(this) }>
            <i className="fa fa-fw fa-ellipsis-v" />
          </div>
        }
      </div>
    )
    return <div onClick={ this._handleClick.bind(this) }>{ item }</div>
  }

  _handleClick() {
    const { link, handler } = this.props
    if(link) this.context.router.push(link)
    if(handler) handler()
  }

  _getClass() {
    const { className, handler, link } = this.props
    const classes = ['reframe-list-item']
    if(className) classes.push(className)
    if(link || handler) classes.push('reframe-list-item-link')
    return classes.join(' ')
  }

  _handleTasks() {
    const { tasks } = this.props
    this.context.tasks.open(tasks)
  }

}

export default Item
