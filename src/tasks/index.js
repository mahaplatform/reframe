import React from 'react'
import ReactDOM from 'react-dom'
import Task from './task.js'

class Tasks extends React.Component {

  render() {
    return (
      <div className="tasks">
        <div className="ui vertical menu fluid">
          { this.props.tasks.map((task, index) => {
            return <Task key={`task_${index}`} task={task} />
          })}
        </div>
      </div>
    )
  }

}

export default Tasks