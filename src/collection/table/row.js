import ReactDOM from 'react-dom'
import React from 'react'
import Cell from './cell.js'
import {Link} from 'react-router'
import _ from 'lodash'
import Logger from '../../utils/logger'

export default class Row extends React.Component {

  render() {
    let rowClass = (this.props.rowClass) ? this.props.rowClass(this.props.record) : null
    return (
      <tr className={rowClass}>
        {(() => {
          if(!_.isEmpty(this.props.batchActions)) {
            return <td><input type="checkbox" checked={this.props.isChecked} onChange={this.handleCheck.bind(this, this.props.record.id)} /></td>
          }
        })()}
        { this.props.columns.map((column, index) => {
          if(_.includes(this.props.visible, index)) {
            return <Cell key={`column_${index}`} {...this.props.record} params={this.props.params} column={column} />
          }
        })}
        {(() => {
          if(!_.isEmpty(this.props.recordActions)) {
            return (
              <td className="center aligned">
                <div className="ui icon top right pointing dropdown" ref="itemMenu">
                  <i className="ui horizontal ellipsis icon" />
                  <div className="menu">
                    { this.props.recordActions.map((action, index) => {
                      if(action.action == 'edit') {
                        return <div key={`action_${index}`} onClick={this.handleEdit.bind(this)} className="item">Edit</div>
                      } else if(action.action == 'delete') {
                        return <div key={`action_${index}`} onClick={this.handleDelete.bind(this, this.props.record.id)} className="item">Delete</div>
                      } else if(action.route) {
                        var compiled = _.template(action.route, { interpolate: /#{([\s\S]+?)}/g });
                        var to = compiled(this.props.record);
                        return <div key={`action_${index}`} className="item"><Link to={to}>{action.label}</Link></div>
                      } else {
                        return <div key={`action_${index}`} onClick={this.handleAction.bind(this, action, this.props.record.id, this.props.record)} className="item">{action.label}</div>
                      }
                    })}
                  </div>
                </div>
              </td>
            )
          } else {
            return <td>&nbsp;</td>
          }
        })()}
      </tr>
    )
  }

  componentDidMount() {
    $(this.refs.itemMenu).dropdown()
  }

  componentDidUpdate() {
    $(this.refs.itemMenu).dropdown('refresh')
  }

  handleCheck(id) {
    let isChecked = _.includes(this.props.checked, id)
    this.props.onCheck(this.props.componentId, id, !isChecked)
  }

  handleEdit() {
    this.props.onEdit(this.props.record.id)
  }

  handleDelete(id) {
    this.props.onDelete(id)
  }

  handleAction(action, id, data) {
    if(action.handler) {
      if(_.isString(action.handler)) {
        var handlerFn = this.props.actions[action.handler]
      }
      else if(_.isFunction(action.handler)) {
        var handlerFn = action.handler
      }
      else {
        Logger.error(`NOTICE: Handlers for row actions must be a function or a string
        matching the name of a known Flux action. Type ${typeof action.handler} given.`)
      }
      if(action.confirm === true) {
        ModalActions.openModal(this.props.componentId, (props) => {
          return <ConfirmModal onApprove={_.bind(handlerFn, handlerFn, id, data)} {...props} />
        })
      } else {
        _.defer(handlerFn, id, data)
      }
    }
  }

}
