import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, Link, hashHistory} from 'react-router'
import Menu from '../src/menu'
import Config from '../src/utils/config'
import API from '../src/api'

import CollectionExample from './collection/index.jsx'
import FetchCollectionExample from './collection/fetch.jsx'
import FeedExample from './feed/index.jsx'
import CommentsExample from './comments/index.jsx'
import InfiniteCollectionExample from './collection/infinite.jsx'
import MenuExample from './menu/index.jsx'
import FormExample from './form/index.jsx'
import FormSuccessPage from './form/success.jsx'
import ModalExample from './modal/index.jsx'
import TasksExample from './tasks/index.jsx'
import BreadcrumbExample from './breadcrumb/index.jsx'
import DetailExample from './details/index.jsx'
import FetchContainerExample from './containers/fetch.jsx'
import InfiniteContainerExample from './containers/infinite.jsx'
import TabbedPaneExample from './panes/tabbed.jsx'
import TypeaheadExample from './ui/typeahead.jsx'

Config.set('api.pathPrefix', '')
API.setDefaults(Config.get('api'))

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
      search: true,
      searchEndpoint: '/examples/search.json',
      left: [
        {
          label: 'Collections',
          items: [
            {label: 'Standard', route: '/collections/standard'},
            {label: 'Fetch', route: '/collections/fetch'},
            {label: 'Infinite', route: '/collections/infinite'}
          ]
        },
        {
          label: 'Containers',
          items: [
            {label: 'Fetch', route: '/containers/fetch'},
            {label: 'Infinite', route: '/containers/infinite'}
          ]
        },
        {
          label: 'Panes',
          items: [
            {label: 'Tabbed', route: '/panes/tabbed'}
          ]
        },
        {
          label: 'Basic',
          items: [
            {label: 'Comments', route: '/comments'},
            {label: 'Feed', route: '/feed'},
            {label: 'Forms', route: '/forms'},
            {label: 'Modals', route: '/modals'},
            {label: 'Breadcrumbs', route: '/breadcrumbs'},
            {label: 'Tasks', route: '/tasks'},
            {label: 'Details', route: '/details'}
          ]
        },
        {
          label: 'UI',
          items: [
            {label: 'Typeahead', route: '/ui/typeahead'}
          ]
        }

      ]
    }
  }

}

const routes = (
  <Route component={ExampleLinks}>
    <Route path="/" component={Example}>
      <IndexRoute component={Index} />
      <Route path="collections/standard" component={CollectionExample} />
      <Route path="collections/fetch" component={FetchCollectionExample} />
      <Route path="feed" component={FeedExample} />
      <Route path="collections/infinite" component={InfiniteCollectionExample} />
      <Route path="menus" component={MenuExample} />
      <Route path="comments" component={CommentsExample} />
      <Route path="forms" component={FormExample} />
      <Route path="forms/success" component={FormSuccessPage} />
      <Route path="modals" component={ModalExample} />
      <Route path="breadcrumbs" component={BreadcrumbExample} />
      <Route path="tasks" component={TasksExample} />
      <Route path="details" component={DetailExample} />
      <Route path="containers/fetch" component={FetchContainerExample} />
      <Route path="containers/infinite" component={InfiniteContainerExample} />
      <Route path="panes/tabbed" component={TabbedPaneExample}>
        <IndexRoute component={TabbedPaneExample.One} />
        <Route path="one" component={TabbedPaneExample.One} />
        <Route path="two" component={TabbedPaneExample.Two} />
        <Route path="three" component={TabbedPaneExample.Three} />
      </Route>
      <Route path="ui/typeahead" component={TypeaheadExample}/>
    </Route>
  </Route>
)

window.React = React
window.ReactDOM = ReactDOM
window._ = _

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  ReactDOM.render(<Router routes={routes} history={hashHistory} />, document.getElementById('app-container'))
})

$('.dropdown').dropdown()
