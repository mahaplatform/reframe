import React from 'react'
import ReactDOM from 'react-dom'
import Tasks from 'tasks'

export default class TasksExamples extends React.Component {


  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <div className="ui top attached segment">
          <Tasks tasks={this.getTasks()} />
        </div>
      </div>
    )
  }

  getTasks() {
    return [
      { label: 'Details', link: '/admin/contact/12345' },
      { label: 'Edit', link: '/admin/contact/12345/edit' },
    ]
  }

}
