import React from 'react'
import ReactDOM from 'react-dom'
import TabbedPane from 'panes/tabbed'

class Tabbed extends React.Component {

  render() {
    return (
      <div>
        <h1>Tabbed Pane</h1>
        {React.cloneElement(this.props.children, {tabs: this.getTabs(), ...this.props})}
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
  return (
    <TabbedPane tabs={props.tabs} location={props.location}>
      One
    </TabbedPane>
  )
}

Tabbed.Two = (props) => {
  return (
    <TabbedPane tabs={props.tabs} location={props.location}>
      Two
    </TabbedPane>
  )
}

Tabbed.Three = (props) => {
  console.log(props);
  return (
    <TabbedPane tabs={props.tabs} location={props.location}>
      Three
    </TabbedPane>
  )
}

export default Tabbed

