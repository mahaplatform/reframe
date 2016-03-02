import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, Link, hashHistory} from 'react-router'
import Menu from 'menu'

import CollectionExamples from './collection/index.jsx'
import FetchCollectionExamples from './collection/fetch.jsx'
import MenuExamples from './menu/index.jsx'
import FormExamples from './form/index.jsx'
import ModalExamples from './modal/index.jsx'
import TasksExamples from './tasks/index.jsx'
import BreadcrumbExamples from './breadcrumb/index.jsx'
import DetailExamples from './details/index.jsx'
import FetchContainerExamples from './containers/fetch.jsx'
import InfiniteContainerExamples from './containers/infinite.jsx'

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
          <Menu menu={this.getMenu()} />
          <div className="segment" style={{marginTop: 40}}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

  getMenu() {
    return {
      left: [
        {
          label: 'Collections',
          items: [
            {label: 'Standard', route: '/collections/standard'},
            {label: 'Fetch', route: '/collections/fetch'},
          ]
        },
        {
          label: 'Containers',
          items: [
            {label: 'Fetch', route: '/containers/fetch'},
            {label: 'Infinite', route: '/containers/infinite'},
          ]
        },
        {
          label: 'Basic',
          items: [
            {label: 'Forms', route: '/forms'},
            {label: 'Modals', route: '/modals'},
            {label: 'Breadcrumbs', route: '/breadcrumbs'},
            {label: 'Tasks', route: '/tasks'},
            {label: 'Details', route: '/details'}
          ]
        },

      ]
    }
  }

}

const routes = (
  <Route component={ExampleLinks}>
    <Route path="/" component={Example}>
      <IndexRoute component={Index} />
      <Route path="collections/standard" component={CollectionExamples} />
      <Route path="collections/fetch" component={FetchCollectionExamples} />
      <Route path="menus" component={MenuExamples} />
      <Route path="forms" component={FormExamples} />
      <Route path="modals" component={ModalExamples} />
      <Route path="breadcrumbs" component={BreadcrumbExamples} />
      <Route path="tasks" component={TasksExamples} />
      <Route path="details" component={DetailExamples} />
      <Route path="containers/fetch" component={FetchContainerExamples} />
      <Route path="containers/infinite" component={InfiniteContainerExamples} />
    </Route>
  </Route>
)

window.React = React
window.ReactDOM = ReactDOM
window._ = _

ReactDOM.render(<Router routes={routes} history={hashHistory} />, document.getElementById('app-container'))

$('.dropdown').dropdown()
