import React from 'react'
import Task from './task'
import _ from 'lodash'
import $ from 'jquery'

class Tasks extends React.Component {

  static propTypes = {
    tasks: React.PropTypes.arrayOf(React.PropTypes.shape({
      label: React.PropTypes.string,
      route: React.PropTypes.string,
      handler: React.PropTypes.func,
      primary: React.PropTypes.bool
    })).isRequired
  }

  static defaultProps = {
  }

  render() {
    const { tasks } = this.props
    const primary = _.filter(tasks, task => task.primary === true)
    return (
      <div className="tasks">
        <div className="ui basic buttons">
          {primary.map((task, index) => {
            return <Task key={`primary_task_${index}`} {...task} />
          })}
          <div className="ui icon top right pointing dropdown button" ref="dropdown">
            <i className="setting icon"></i>
            <i className="caret down icon"></i>
            <div className="menu">
              {tasks.map((task, index) => {
                return <Task key={`task_${index}`} {...task} />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.dropdown).dropdown()
  }

}

export default Tasks
