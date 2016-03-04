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
    var description = `<a href="${this.props.subject.link}">${this.props.subject.text}</a> ${this.props.story}`;
    description = this._replace(description, 'object1', this.props.object1);
    description = this._replace(description, 'object2', this.props.object2);
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

  _replace(description, key, object) {
    if(object) {
      let replacement = `the ${object.entity} `;
      replacement += (object.link) ? `<a href="${object.link}">${object.text}</a>` : object.text;
      description = description.replace(`{${key}}`, replacement)
    }
    return description;
  }

}

export default Event
