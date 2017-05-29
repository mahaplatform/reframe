import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from './actions'
import Format from '../../utils/format'

class Card extends React.Component {

  static propTypes = {
    header: React.PropTypes.string,
    image: React.PropTypes.string,
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label: React.PropTypes.string,
        content: React.PropTypes.string,
        format: React.PropTypes.oneOfType([
          React.PropTypes.string,
          React.PropTypes.element
        ])
      })
    ),
    body: React.PropTypes.string,
    buttons: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label: React.PropTypes.string,
        style: React.PropTypes.string,
        route: React.PropTypes.string,
        onClick: React.PropTypes.func,
      })
    )
  }

  static defaultProps = {
  }

  render() {
    const { header, image, items, body, buttons } = this.props
    return (
      <div className="ui card fluid">
       {(() => {
         if(header) {
           return (
             <div className="content">
               {header}
             </div>
           )
         }
       })()}
       {(() => {
         if(image) {
           return (
            <div className="image">
              <img src={image} />
            </div>
           )
         }
       })()}
        {(() => {
          if(body) {
            return (
              <div className="ui content">
                {body}
              </div>
            )
          }
        })()}
        {(() => {
          if(items) {
            return (
              <div className="ui content">
                <div className="ui list">
                  {items.map((item, index) => {
                    return (
                      <div key={`item_${index}`} className="item">
                        <div className="header">{item.label}</div>
                        <Format format={item.format} value={item.content} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }
        })()}
        {(() => {
          if(buttons) {
            return (
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
            )
          }
        })()}
      </div>
    )
  }

}

const mapStateToProps = (state, props) => ({ state })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
