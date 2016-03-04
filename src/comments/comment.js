import React from 'react'
import ReactDOM from 'react-dom'
import LiveTime from './livetime.js'

class Comment extends React.Component {

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
      <div className="comment">
        <a className="avatar">
          <img src={this.props.user.photo} />
        </a>
        <div className="content">
          <a className="author">{this.props.user.full_name}</a>
          <div className="metadata">
            <span className="date"><LiveTime time={this.props.created_at} /></span>
          </div>
          <div className="text">
            <p>{this.props.body}</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Comment
