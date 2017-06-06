import React from 'react'
import PropTypes from 'prop-types'
import Format from '../format'

class List extends React.Component {

  static propTypes = {
    sections: PropTypes.array
  }

  render() {
    const { sections } = this.props
    return (
      <div className="reframe-list">
        { sections.map((section, index) => (
          <div key={`list_section_${index}`} className="reframe-list-section">
            <div className="reframe-list-title">
              { section.title }
            </div>
            { section.items && section.items.length > 0 &&
              section.items.map((item, itemIndex) => (
                <div key={`list_item_${itemIndex}`} className="reframe-list-item">
                  { item.icon &&
                    <div className="reframe-list-item-icon">
                      <i className={`${item.icon} icon`} />
                    </div>
                  }
                  <div className="reframe-list-item-content">
                    <strong>{ item.label }</strong><br />
                    <Format { ...this.props } format={ item.format } value={ item.content } />
                  </div>
                </div>
              ))
            }
            { !section.items || (section.items && section.items.length === 0) &&
              <div className="reframe-list-item">
                <div className="reframe-list-item-content">
                  { section.empty }
                </div>
              </div>
            }
          </div>
        ))}
      </div>
    )
  }

}

export default List