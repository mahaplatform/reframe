import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as actions from './actions'

class Tasks extends React.Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
    const { tasks } = this.props
    return (
      <div className="tasks">
        <div className="ui basic buttons">
          {tasks.primary.map((task, index) => {
            return <Link key={`primary_task_${index}`} to={task.route} className="ui button">{task.label}</Link>
          })}
          <div className="ui icon top right pointing dropdown button" ref="dropdown">
            <i className="setting icon"></i>
            <i className="caret down icon"></i>
            <div className="menu">
              {[...tasks.primary,...tasks.secondary].map((task, index) => {
                return <div key={`primary_secondary_task_${index}`} className="item"><Link to={task.route}>{task.label}</Link></div>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.dropdown).dropdown()
  }

}

const mapStateToProps = (state, props) => ({
  state: state.reframe[props.id]
})

const mapDispatchToProps = {
  onChangeTab: actions.changeTab
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
