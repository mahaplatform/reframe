import React from 'react'
import _ from 'lodash'
import Tab from './tab'

class Tabs extends React.Component {

  static propTypes = {
    tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
      label: React.PropTypes.string,
      content: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.func,
        React.PropTypes.element
      ])
    })).isRequired,
    onChangeTab: React.PropTypes.func.isRequired,
    active: React.PropTypes.number
  }

  static defaultProps = {
    active: 0
  }

  render() {
    const { tabs, active, onChangeTab } = this.props
    const content = tabs[active].content
    return (
      <div className="tabs">
        <div className="ui top attached tabular menu">
          {tabs.map((tab, index) => {
            let isActive = (index == active)
            return <Tab key={`tab_${index}`} active={isActive} label={tab.label} onChangeTab={onChangeTab} />
          })}
       </div>
       <div className="ui bottom attached active tab segment">
         {(() => {
           if(_.isString(content)) {
             return <p>{content}</p>
           } else if(_.isElement(content)) {
             return <content />
           } else if(_.isFunction(content)) {
             return {content}
           }
         })()}
       </div>
     </div>
    )
  }

}

export default Tabs
