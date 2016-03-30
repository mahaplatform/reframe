import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

export default class FormSuccessPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hey, good job!</h1>
        <p>Your forms work!</p>
        <Link to="/forms" className="ui primary button">Go Back</Link>
      </div>
    )
  }
}
