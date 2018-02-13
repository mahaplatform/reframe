import Section from './section'
import React from 'react'
import _ from 'lodash'

class List extends React.Component {

  render() {
    const { alert, empty, footer, header, items, sections } = this.props
    return (
      <div className={ this._getClasses() }>
        { header &&
          <div className="reframe-list-header">
            { _.isFunction(header) ? React.createElement(header) : header }
          </div>
        }
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
  
  _getClasses() {
    const { className } = this.props
    const classes = ['reframe-list']
    if(className) classes.push(className)
    return classes.join(' ')
  }

}

export default List
