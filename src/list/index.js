import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Format from '../format'
import { Link } from 'react-router-dom'

class List extends React.Component {

  static propTypes = {
    empty: PropTypes.string,
    items: PropTypes.array,
    sections: PropTypes.array
  }

  render() {
    const { empty, items, sections } = this.props
    return (
      <div className="reframe-list">
        { sections && sections.map((section, index) => <Section { ...section } key={`list_section_${index}`} />) }
        { items && <Section items={ items } empty={ empty } /> }
      </div>
    )
  }

}

class Section extends React.Component {

  static propTypes = {
    empty: PropTypes.string,
    items: PropTypes.array,
    title: PropTypes.string
  }

  render() {
    const { empty, items, title } = this.props
    return (
      <div className="reframe-list-section">
        { title && <div className="reframe-list-title">{ title }</div> }
        { items && items.length > 0 &&
          items.map((item, itemIndex) => {
            const content = (
              <div key={`list_item_${itemIndex}`} className="reframe-list-item">
                { item.icon &&
                  <div className="reframe-list-item-icon">
                    <i className={`${item.icon} icon`} />
                  </div>
                }
                { item.component &&
                  _.isFunction(item.component) ? React.createElement(item.component, item.content) : item.component
                }
                { !item.component &&
                  <div className="reframe-list-item-content">
                    { item.label && <strong>{ item.label }<br /></strong> }
                    { !item.component && <Format { ...item.content } format={ item.format } value={ item.content } /> }
                  </div>
                }
                { item.extra &&
                  <div className="reframe-list-item-extra">
                    { _.isFunction(item.extra) ? React.createElement(item.extra) : item.extra }
                  </div>
                }
                { item.link &&
                  <div className="reframe-list-item-proceed">
                    <i className="chevron right icon" />
                  </div>
                }
              </div>
            )
            if(item.link) {
              return (
                <Link key={`list_item_link_${itemIndex}`} to={ item.link }>
                  { content }
                </Link>
              )
            }
            return content
          })
        }
        { empty && !items || (items && items.length === 0) &&
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





export default List
