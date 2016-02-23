import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, Link, hashHistory} from 'react-router'

import CollectionExamples from './collection/index.jsx'
import FormExamples from './form/index.jsx'
import ModalExamples from './modal/index.jsx'
import BreadcrumbExamples from './breadcrumb/index.jsx'
import DetailExamples from './details/index.jsx'

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
            <Link to="/modals" className="ui item" activeClass="active">Modals</Link>
            <Link to="/breadcrumbs" className="ui item" activeClass="active">Breadcrumbs</Link>
            <Link to="/details" className="ui item" activeClass="active">Details</Link>
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
      <Route path="forms" component={FormExamples} />
      <Route path="modals" component={ModalExamples} />
      <Route path="breadcrumbs" component={BreadcrumbExamples} />
      <Route path="details" component={DetailExamples} />
    </Route>
  </Route>
)

ReactDOM.render(<Router routes={routes} history={hashHistory} />, document.getElementById('examples'))
