import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './components'
import Confirm from './components/confirm'
import Drawer from './components/drawer'
import Flash from './components/flash'
import Modal from './components/modal'
import Prompt from './components/prompt'
import Tasks from './components/tasks'

class Demo extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Index } />
          <Route exact path="/confirm" component={ Confirm } />
          <Route exact path="/drawer" component={ Drawer } />
          <Route exact path="/flash" component={ Flash } />
          <Route exact path="/modal" component={ Modal } />
          <Route exact path="/prompt" component={ Prompt } />
          <Route exact path="/tasks" component={ Tasks } />
        </div>
      </Router>
    )
  }

}

export default Demo
