import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, Link, hashHistory} from 'react-router'

import CollectionExamples from './collection/index.jsx'

class Example extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

class ExampleLinks extends React.Component {
  render() {
    return (
      <div className="ui padded one column grid">
        <div className="column">
          <div className="ui pointing menu">
            <Link to="/collections" className="ui item" activeClass="active">Collections</Link>
            <Link to="/forms" className="ui item" activeClass="active">Forms</Link>
            <Link to="/containers" className="ui item" activeClass="active">Containers</Link>
            <Link to="/menus" className="ui item" activeClass="active">Menus</Link>
            <Link to="/tasks" className="ui item" activeClass="active">Tasks</Link>
          </div>
          <div className="segment">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

const routes = (
  <Route component={ExampleLinks}>
    <Route path="/" component={Example}>
      <IndexRoute component={Index} />
      <Route path="collections" component={CollectionExamples} />
    </Route>
  </Route>
)

ReactDOM.render(<Router routes={routes} history={hashHistory} />, document.getElementById('examples'))
