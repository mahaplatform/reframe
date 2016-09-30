import React from 'react'
import Component from '../component'
import Tasks from './tasks'

class Index extends React.Component {

  static propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.shape({
      label: React.PropTypes.string
    }))
  }

  static defaultProps = {
    tasks: []
  }

  render() {
    return <Tasks {...this.props} />
  }

}

export default Component('tasks', 'id')(Tasks)
