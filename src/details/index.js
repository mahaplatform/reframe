import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Format from '../format'

class Details extends React.Component {

  static propTypes = {
    header: PropTypes.string,
    image: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        content: PropTypes.any,
        format: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element,
          PropTypes.func
        ])
      })
    ),
    body: PropTypes.string,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        style: PropTypes.string,
        route: PropTypes.string,
        onClick: PropTypes.func
      })
    )
  }

  render() {
    const { top, image, items, body, buttons } = this.props
    return (
      <div className="chrome-details">
        { top && <div className="chrome-details-top">{ top }</div> }
        { image && <div className="chrome-details-image"><img src={ image } className="ui circular image" /></div> }
        { body && <div className="chrome-details-content">{ body }</div> }
        { items &&
          <div className="chrome-details-content">
            <div className="ui list">
              {items.map((item, index) => {
                if(item.content !== null || item.content === undefined) {
                  return (
                    <div key={`item_${index}`} className="item">
                      <div className="header">{item.label}</div>
                      <Format {...this.props} format={item.format} value={item.content} />
                    </div>
                  )
                }
              })}
            </div>
          </div>
        }
        { buttons &&
          <div className="extra content">
            <div className="ui two buttons">
              {buttons.map((button, index) => {
                let classes = ['ui', 'button']
                if(button.style) {
                  classes.push(button.style)
                }
                return <Link key={`task_${index}`} to={button.route} className={classes.join(' ')}>{button.label}</Link>
              })}
            </div>
          </div>
        }
      </div>
    )
  }

}

export default Details
