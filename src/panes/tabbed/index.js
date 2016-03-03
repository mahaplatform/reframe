import React from 'react'
import ReactDOM from 'react-dom'
import Tab from './tab.js'

class Tabbed extends React.Component {

  render() {
    var activeRoute = _.find(this.props.tabs, {route:this.props.location.pathname})
    var active = (!_.isUndefined(activeRoute)) ? activeRoute.route : this.props.tabs[0].route
    return (
      <div className="pane">
        <div className="ui top attached tabular menu">
           { this.props.tabs.map((tab, index) => {
              return <Tab key={`tab_${index}`} tab={tab} active={(tab.route == active)} />
           })}
        </div>
        <div className="ui bottom attached active tab segment">
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default Tabbed
