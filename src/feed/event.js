import React from 'react'
import ReactDOM from 'react-dom'
import LiveTime from './livetime.js'
import moment from 'moment'

class Event extends React.Component {

  static propTypes = {
    subject: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      full_name: React.PropTypes.string.isRequired
    }).isRequired,
    created_at: React.PropTypes.string.isRequired,
    story: React.PropTypes.string.isRequired
  }

  static defaultProps = {
  }

  render() {
    var description = '<a href="'+this.props.subject.link+'">'+this.props.subject.full_name+'</a> '
    description = description + this.props.story
    if(this.props.object1) {
      description = description.replace('{object1}', this.props.object1.description+' <a href="'+this.props.object1.link+'">'+this.props.object1.text+'</a>')
    }
    if(this.props.object2) {
      description = description.replace('{object2}', this.props.object2.description+' <a href="'+this.props.object2.link+'">'+this.props.object2.text+'</a>')
    }
    return (
      <div className="event">
        <div className="label">
          <img src="http://lorempixel.com/35/35/people" />
        </div>
        <div className="content">
          <div className="date"><LiveTime time={this.props.created_at} /> on {moment(this.props.created_at).format('dddd, MMM D, YYYY')}</div>
          <div className="summary" dangerouslySetInnerHTML={{__html: description}} />
        </div>
      </div>
    )
  }

}

export default Event
