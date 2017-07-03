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
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    content: PropTypes.string,
    empty: PropTypes.string,
    items: PropTypes.array,
    title: PropTypes.string
  }

  render() {
    const { component, content, empty, items, title } = this.props
    return (
      <div className="reframe-list-section">
        { title && <div className="reframe-list-title">{ title }</div> }
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
          items.map((item, itemIndex) => <Item key={`list_item_${itemIndex}`} { ...item } />)
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

class Item extends React.Component {

  static propTypes = {
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    content: PropTypes.any,
    extra: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    format: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.element
    ]),
    handler: PropTypes.func,
    icon: PropTypes.string,
    label: PropTypes.string,
    link: PropTypes.string
  }

  render() {
    const { component, content, extra, format, handler, icon, label, link } = this.props
    const item = (
      <div className="reframe-list-item">
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
            { label && <strong>{ label }<br /></strong> }
            { !component && <Format { ...content } format={ format } value={ content } /> }
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

}

export default List
