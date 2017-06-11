import React from 'react'
import PropTypes from 'prop-types'
import Format from '../format'

class List extends React.Component {

  static propTypes = {
    items: PropTypes.array,
    sections: PropTypes.array
  }

  render() {
    const { items, sections } = this.props
    return (
      <div className="reframe-list">
        { sections && sections.map((section, index) => <Section { ...section } key={`list_section_${index}`} />) }
        { items && <Section items={items} /> }
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
        { title &&
          <div className="reframe-list-title">
            { title }
          </div>
        }
        { items && items.length > 0 &&
          items.map((item, itemIndex) => (
            <div key={`list_item_${itemIndex}`} className="reframe-list-item">
              { item.icon &&
                <div className="reframe-list-item-icon">
                  <i className={`${item.icon} icon`} />
                </div>
              }
              <div className="reframe-list-item-content">
                { item.label && <strong>{ item.label }<br /></strong> }
                <Format { ...this.props } format={ item.format } value={ item.content } />
              </div>
            </div>
          ))
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
