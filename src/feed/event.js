import React from 'react'
import ReactDOM from 'react-dom'
import LiveTime from './livetime.js'
import moment from 'moment'

class Event extends React.Component {

  static propTypes = {
    subject: React.PropTypes.shape({
      photo: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      link: React.PropTypes.string.isRequired,
    }).isRequired,
    created_at: React.PropTypes.string.isRequired,
    story: React.PropTypes.string.isRequired,
    object1: React.PropTypes.shape({
      entity: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      link: React.PropTypes.string
    }),
    object2: React.PropTypes.shape({
      entity: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      link: React.PropTypes.string
    }),

  }

  static defaultProps = {
  }

  render() {
    var description = '<a href="'+this.props.subject.link+'">'+this.props.subject.text+'</a> '
    description += this.props.story
    if(this.props.object1) {
      let replacement = 'the '+this.props.object1.entity+' ';
      replacement += (this.props.object1.link) ? '<a href="'+this.props.object1.link+'">'+this.props.object1.text+'</a>' : this.props.object1.text;
      description = description.replace('{object1}', replacement)
    }
    if(this.props.object2) {
      let replacement = 'the '+this.props.object2.entity+' ';
      replacement += (this.props.object2.link) ? '<a href="'+this.props.object2.link+'">'+this.props.object2.text+'</a>' : this.props.object2.text;
      description = description.replace('{object2}', replacement)
    }
    return (
      <div className="event">
        <div className="label">
          <img src={this.props.subject.photo} />
        </div>
        <div className="content">
          <div className="date"><LiveTime time={this.props.created_at} /> on {moment(this.props.created_at).format('dddd, MMM D, YYYY @ h:mm A')}</div>
          <div className="summary" dangerouslySetInnerHTML={{__html: description}} />
        </div>
      </div>
    )
  }

}

export default Event
