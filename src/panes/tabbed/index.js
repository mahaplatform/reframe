import React from 'react'
import ReactDOM from 'react-dom'
import Tab from './tab.js'

class Tabbed extends React.Component {

  static propTypes = {
    tabs: React.PropTypes.array,
    location: React.PropTypes.object,
    even: React.PropTypes.bool
  }

  static defaultProps = {
    tabs: [],
    location: null,
    even: false
  }

  render() {
    var activeRoute = _.find(this.props.tabs, {route:this.props.location.pathname})
    var active = (!_.isUndefined(activeRoute)) ? activeRoute.route : this.props.tabs[0].route
    var klass = ['ui','top','attached','tabular']
    if(this.props.even) {
      var sizes = ['zero','one','two','three','four','five','six','seven','eight','nine','ten']
      klass = klass.concat(['fluid',sizes[this.props.tabs.length],'item','menu'])
    } else {
      klass.push('menu')
    }
    return (
      <div className="pane">
        <div className={klass.join(' ')}>
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
