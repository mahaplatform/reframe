import React from 'react'
import PropTypes from 'prop-types'
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
        handler: PropTypes.string
      })
    )
  }

  render() {
    const { top, image, items, body, buttons } = this.props
    return (
      <div className="reframe-details">
        { top && <div className="reframe-details-top">{ top }</div> }
        { image && <div className="reframe-details-image"><img src={ image } className="ui circular image" /></div> }
        { body && <div className="reframe-details-content">{ body }</div> }
        { items &&
          <div className="reframe-details-content">
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
                return <div key={`task_${index}`} handler={button.handler} className={classes.join(' ')}>{button.label}</div>
              })}
            </div>
          </div>
        }
      </div>
    )
  }

}

export default Details
