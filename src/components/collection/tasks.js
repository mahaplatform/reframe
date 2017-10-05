import { CSSTransition } from 'react-transition-group'
import Filters from '../filters'
import Export from '../export'
import Task from '../task'
import React from 'react'
import _ from 'lodash'

class Tasks extends React.Component {

  render() {
    const { filters, open, panel, tasks } = this.props
    return (
      <div className="reframe-collection-tasks">
        <div className="reframe-collection-tasks-inner">
          <div className="reframe-collection-tasks-panel">
            <div className="reframe-collection-tasks-panel-header">
              Tasks
            </div>
            <div className="reframe-collection-tasks-panel-body">
              { filters &&
                <div className="reframe-collection-tasks-panel-item" onClick={ this._handleFilter.bind(this) }>
                  <i className="fa fa-fw fa-filter" />Filter Records
                </div>
              }
              { this.props.export &&
                <div className="reframe-collection-tasks-panel-item" onClick={ this._handleExport.bind(this) }>
                  <i className="fa fa-fw fa-download" />Export Records
                </div>
              }
              { tasks && tasks.map((task, index) => (
                <Task key={`task_${index}`} { ...this._getTask(task) } />
              )) }
            </div>
          </div>
          <CSSTransition in={ open } classNames="cover" timeout={ 500 } mountOnEnter={ true } unmountOnExit={ true }>
            <div className="reframe-collection-tasks-panel" key="foo">
              { _.isFunction(panel) ? React.createElement(panel, this.props) : panel }
            </div>
          </CSSTransition>
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    const { open, onClearPanel } = this.props
    if(open !== prevProps.open && !open) {
      setTimeout(onClearPanel, 500)
    }
  }

  _handleFilter() {
    this.props.onAddPanel((props) => {
      const { entity, filters, filter, onSetFilter } = props
      const article = _.includes(['a','e','i','o'], entity[0]) ? 'an' : 'a'
      return React.createElement(Filters, {
        filters,
        values: filter,
        prompt: `Find ${article} ${entity}`,
        onUpdate: onSetFilter,
        onDone: () => this.props.onRemovePanel()
      })
    })
  }

  _handleExport() {
    this.props.onAddPanel((props) => {
      const { endpoint, filtered, sort, token } = props
      return React.createElement(Export, {
        defaultValue: this.props.export,
        endpoint,
        filter: filtered,
        sort: sort.key ? (sort.order === 'desc' ? '-' : '') + sort.key : null,
        token,
        onDone: () => this.props.onRemovePanel()
      })
    })
  }

  _getTask(task) {
    if(!task.panel) return task
    return {
      label: task.label,
      icon: task.icon,
      handler: () => this.props.onAddPanel(task.panel)
    }
  }

}

export default Tasks
