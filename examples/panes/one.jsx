import React from 'react'
import ReactDOM from 'react-dom'
import TabbedPane from 'panes/tabbed'

export default class TasksExamples extends React.Component {

  render() {
    return (
      <div>
        <h1>Tabbed Pane</h1>
        <TabbedPane tabs={this.getTabs()} inner={this.props.children} />
        {this.props.children}
      </div>
    )
  }

  getTabs() {
    return [
      { label: 'One', route: `/panes/tabbed/one` },
      { label: 'Two', route: `/panes/tabbed/two` },
      { label: 'Three', route: `/panes/tabbed/three` }
    ]
  }

}


