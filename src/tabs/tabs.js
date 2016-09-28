import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'

class Tabs extends React.Component {

  static propTypes = {
    tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
      label: React.PropTypes.string,
      content: React.PropTypes.func
    })),
    state: React.PropTypes.shape({
      active: React.PropTypes.number
    })
  }

  static defaultProps = {
    tabs: []
  }

  render() {
    const { tabs } = this.props
    const { active } = this.props.state
    const Element = tabs[active].content
    return (
      <div className="tabs">
        <div className="ui top attached tabular menu">
          {tabs.map((tab, index) => {
            let classes = ["item"]
            if(index == active) {
              classes.push("active")
            }
            return (
              <div key={`tab_${index}`}
                   className={classes.join(" ")}
                   onClick={this._handleChangeTab.bind(this,index)}>
                {tab.label}
              </div>
            )
          })}
       </div>
       <div className="ui bottom attached active tab segment">
         <Element />
       </div>
     </div>
    )
  }

  _handleChangeTab(index) {
    const { id, onChangeTab } = this.props
    onChangeTab(id, index)
  }

}

const mapStateToProps = (state, props) => ({
  state: state[props.id]
})

const mapDispatchToProps = {
  onChangeTab: actions.changeTab
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
