import React from 'react'
import ReactDOM from 'react-dom'
import TabbedPane from 'panes/tabbed'

class Tabbed extends React.Component {

  render() {
    return (
      <div>
        <h1>Tabbed Pane</h1>
        <TabbedPane tabs={this.getTabs()} inner={this.props.children} {...this.props} />
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

Tabbed.One = (props) => {
  return <div>One</div>
}

Tabbed.Two = (props) => {
  return <div>Two</div>
}

Tabbed.Three = (props) => {
  return <div>Three</div>
}

export default Tabbed

