import React from 'react'
import Component from '../component'
import Tabs from './tabs'

class Index extends React.Component {

  static propTypes = {
    tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
      label: React.PropTypes.string
    }))
  }

  static defaultProps = {
    tabs: []
  }

  render() {
    return <Tabs {...this.props} />
  }

}

export default Component('tabs', 'id')(Index)
