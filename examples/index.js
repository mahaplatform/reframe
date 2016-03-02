import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, Link, hashHistory} from 'react-router'

import CollectionExamples from './collection/index.jsx'
import FetchCollectionExamples from './collection/fetch.jsx'
import FormExamples from './form/index.jsx'
import ModalExamples from './modal/index.jsx'
import TasksExamples from './tasks/index.jsx'
import BreadcrumbExamples from './breadcrumb/index.jsx'
import DetailExamples from './details/index.jsx'
import FetchContainerExamples from './containers/fetch.jsx'

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
            <div className="ui dropdown item" activeClass="active">
              Collections
              <i className="dropdown icon"></i>
              <div className="menu">
                <Link to="/collections/standard" className="item">Standard</Link>
                <Link to="/collections/fetch" className="item">Fetch</Link>
              </div>
            </div>
            <Link to="/forms" className="ui item" activeClass="active">Forms</Link>
            <Link to="/modals" className="ui item" activeClass="active">Modals</Link>
            <Link to="/breadcrumbs" className="ui item" activeClass="active">Breadcrumbs</Link>
            <Link to="/tasks" className="ui item" activeClass="active">Tasks</Link>
            <Link to="/details" className="ui item" activeClass="active">Details</Link>
            <div className="ui dropdown item" activeClass="active">
              Containers
              <i className="dropdown icon"></i>
              <div className="menu">
                <Link to="/containers/fetch" className="item">Fetch</Link>
              </div>
            </div>
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
      <Route path="collections/standard" component={CollectionExamples} />
      <Route path="collections/fetch" component={FetchCollectionExamples} />
      <Route path="forms" component={FormExamples} />
      <Route path="modals" component={ModalExamples} />
      <Route path="breadcrumbs" component={BreadcrumbExamples} />
      <Route path="tasks" component={TasksExamples} />
      <Route path="details" component={DetailExamples} />
      <Route path="containers/fetch" component={FetchContainerExamples} />
    </Route>
  </Route>
)

window.React = React
window.ReactDOM = ReactDOM
window._ = _

ReactDOM.render(<Router routes={routes} history={hashHistory} />, document.getElementById('examples'))

$('.dropdown').dropdown()
