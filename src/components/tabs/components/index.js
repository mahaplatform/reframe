import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Tabs from './tabs'

class Index extends React.Component {

  static propTypes = {
    tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
      label: React.PropTypes.string,
      content: React.PropTypes.func
    })),
    active: React.PropTypes.number
  }

  static defaultProps = {
  }

  render() {
    return <Tabs {...this.props} />
  }

}

const mapStateToProps = (state, props) => state

const mapDispatchToProps = {
  onChangeTab: actions.changeTab
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
