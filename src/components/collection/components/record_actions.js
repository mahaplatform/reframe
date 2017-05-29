import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'

class RecordActions extends React.Component {

  static propTypes = {
    button: React.PropTypes.bool.isRequired,
    icon: React.PropTypes.string.isRequired,
    record: React.PropTypes.object.isRequired,
    recordActions: React.PropTypes.array.isRequired,
  }

  static defaultProps = {
    button: true,
    icon: '',
    recordActions: [],
    record: {},
  }

  render() {
    _.templateSettings.interpolate = /#{([\s\S]+?)}/g;
    const { button, icon, record, recordActions } = this.props
    let classes = ['ui', 'icon', 'top', 'right', 'pointing', 'dropdown']
    if(button) {
      classes = [...classes, 'tiny', 'button']
    }
    return (
      <div className={classes.join(' ')} ref="record_actions">
        <i className={`${icon} icon`}></i>
        {(button) ? <i className="dropdown icon"></i> : null}
        <div className="menu">
          {recordActions.map((action, index) => {
            let redirect =_.template(action.redirect)(record)
            return (
              <div key={`action_${index}`} className="item">
                <Link to={redirect}>{action.label}</Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.record_actions).dropdown()
  }

}

export default RecordActions
