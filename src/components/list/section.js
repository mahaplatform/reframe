// @flow

import type { SectionProps as Props } from './types'
import type { Node } from '../../types'

import Item from './item'
import React from 'react'
import _ from 'lodash'

class Section extends React.Component<Props, void> {

  render(): Node {
    const { component, content, empty, items, title } = this.props
    return (
      <div className="reframe-list-section">
        { title &&
          <div className="reframe-list-title">{ title }</div>
        }
        { component &&
          _.isFunction(component) ? React.createElement(component, content) : component
        }
        { content &&
          <div className="reframe-list-item">
            <div className="reframe-list-item-content">
              { content }
            </div>
          </div>
        }
        { items && items.length > 0 &&
          items.map((item, itemIndex) => (
            <Item key={`list_item_${itemIndex}`} { ...item } />
          ))
        }
        { empty && items && items.length === 0 &&
          <div className="reframe-list-item">
            <div className="reframe-list-item-content">
              { empty }
            </div>
          </div>
        }
      </div>
    )
  }

}

export default Section
