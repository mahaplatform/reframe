// @flow

import type { Node } from '../../types'
import type { ListProps as Props } from './types'

import Section from './section'
import React from 'react'
import _ from 'lodash'

class List extends React.Component<Props, void> {

  render(): Node {
    const { alert, empty, footer, items, sections } = this.props
    return (
      <div className="reframe-list">
        { alert &&
          <div className={`reframe-list-alert ${alert.color}`}>
            { alert.message }
          </div>
        }
        { sections &&
          sections.map((section, index) => (
            <Section { ...section } key={`list_section_${index}`} />
          ))
        }
        { items &&
          <Section items={ items } empty={ empty } />
        }
        { footer &&
          <div className="reframe-list-footer">
            { _.isFunction(footer) ? React.createElement(footer) : footer }
          </div>
        }
      </div>
    )
  }

}

export default List
