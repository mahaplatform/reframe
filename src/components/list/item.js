// @flow

import type { ItemProps as Props } from './types'
import type { Node } from '../../types'

import Format from '../../utils/format'
import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

class Item extends React.Component<Props, void> {

  render(): Node {
    const { component, content, extra, format, handler, icon, label, link, units } = this.props
    const item = (
      <div className={ this._getClass() }>
        { icon &&
          <div className="reframe-list-item-icon">
            <i className={`${icon} icon`} />
          </div>
        }
        { component &&
          _.isFunction(component) ? React.createElement(component, content) : component
        }
        { !component &&
          <div className="reframe-list-item-content">
            { label &&
              <strong>
                { label }<br />
              </strong>
            }
            <Format { ...content } format={ format } value={ content } />
            &nbsp; { units }
          </div>
        }
        { extra &&
          <div className="reframe-list-item-extra">
            { _.isFunction(extra) ? React.createElement(extra) : extra }
          </div>
        }
        { link &&
          <div className="reframe-list-item-proceed">
            <i className="chevron right icon" />
          </div>
        }
      </div>
    )
    if(link) return <Link to={ link }>{ item }</Link>
    if(handler) return <div onClick={ handler }>{ item }</div>
    return item
  }

  _getClass(): string {
    const { className } = this.props
    const classes = ['reframe-list-item']
    if(className) classes.push(className)
    return classes.join(' ')
  }

}

export default Item
