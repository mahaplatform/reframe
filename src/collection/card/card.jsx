import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
class Card extends React.Component {

  static defaultProps = {
    onCheck: _.noop,
    onRecordAction: _.noop
  }

  render() {
    let batchActions = ''
    if(!_.isEmpty(this.props.batchActions)) {
      let checked = (_.includes(this.props.checked, this.props.id))
      batchActions = (
        <div className="extra content center aligned">
          <input type="checkbox" checked={checked} onChange={this.handleCheck.bind(this, this.props.id)} ref={this.props.id} />
        </div>
      )
    }
    return(
      <div className="ui card">
        <div className="image">
          <img src="/images/logo.jpg" />
        </div>
        <div className="content">
          {this.props.name}
        </div>
        {batchActions}
      </div>
    )
  }

  handleCheck(id) {
    var checked = this.refs[id].checked
    this.props.onCheck(this.props.componentId, id, checked)
  }

  handleRecordAction(action, id) {
    this.props.onRecordAction(this.props.componentId, action, id)
  }

}

export default Card
