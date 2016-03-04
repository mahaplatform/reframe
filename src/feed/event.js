import React from 'react'
import ReactDOM from 'react-dom'
import LiveTime from './livetime.js'

class Event extends React.Component {

  static propTypes = {
    user: React.PropTypes.shape({
      photo: React.PropTypes.string.isRequired,
      full_name: React.PropTypes.string.isRequired
    }).isRequired,
    created_at: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  }

  static defaultProps = {
  }

  render() {
    return (
      <div class="event">
        <div class="content">
          <div class="summary">
            You added <a>Jenny Hess</a> to your <a>coworker</a> group.
          </div>
          <div class="date"><LiveTime time={this.props.created_at} /></div>
        </div>
      </div>
    )
  }

}

export default Event
