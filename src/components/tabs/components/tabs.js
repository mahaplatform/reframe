import React from 'react'
import Tab from './tab'

class Tabs extends React.Component {

  static propTypes = {
    tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
      label: React.PropTypes.string,
      content: React.PropTypes.element
    })),
    onChangeTab: React.PropTypes.func.isRequired,
    active: React.PropTypes.number
  }

  static defaultProps = {
    active: 0
  }

  render() {
    const { tabs, active, onChangeTab } = this.props
    const Element = tabs[active].content
    return (
      <div className="tabs">
        <div className="ui top attached tabular menu">
          {tabs.map((tab, index) => {
            let isActive = (index == active)
            return <Tab key={`tab_${index}`} active={isActive} {...tab} onChangeTab={onChangeTab} />
          })}
       </div>
       <div className="ui bottom attached active tab segment">
         <Element />
       </div>
     </div>
    )
  }

}

export default Tabs
