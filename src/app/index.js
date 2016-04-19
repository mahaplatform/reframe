import React from 'react'
import ReactDOM from 'react-dom'
import appActions from './appActions'
import {createStore, applyMiddleware} from 'redux'
import {connect} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer'
import Messages from './messages'
import Config from '../utils/config'
import _ from 'lodash'

class Application extends React.Component {

  constructor(props) {
    super(props)
    this.store = createStore(appReducer, applyMiddleware(thunkMiddleware))
  }

  static contextTypes = {
    history: React.PropTypes.object
  }

  static childContextTypes = {
    appContainer: React.PropTypes.object,
    session: React.PropTypes.object,
    config: React.PropTypes.object,
    user: React.PropTypes.object
  }

  getChildContext() {
    return {
      session: this.buildSessionObject(),
      config: _.merge(Config.get('*'), this.store.getState().config),
      user: this.store.getState().user,
      appContainer: this
    }
  }

  render() {
    const {status} = this.store.getState()
    switch (status) {
      case "LOADING":
        return (
          <div className="session">
            <div className="ui active inverted dimmer">
              <div className="ui text loader">Loading</div>
            </div>
          </div>
        )
      case "READY":
        return (
          <div className="session">
            <ApplicationMessages store={this.store} />
            {this.props.children}
          </div>
        )
      default:
        return (
          <div className="session">
            <div className="error">There was a problem loading critical application data.</div>
          </div>
        )
    }
  }

  buildSessionObject() {
    const store = this.store
    return {
      ...store.getState().session,
      user: store.getState().user,
      showMessage(message, type = 'info') {
        _.defer(() => store.dispatch(appActions.showFlashMessage(message, type)))
      }
    }
  }

  static mapStateToMessageProps(state) {
    return {
      messages: state.messages
    }
  }

  static mapDispatchToMessageProps(dispatch, ownProps) {
    return {
      onClose(id) {
        dispatch(appActions.clearFlashMessages())
      }
    }
  }

  handleHistoryTransition() {
    this.store.dispatch(appActions.clearFlashMessages())
  }

  componentDidMount() {
    this.store.subscribe(this.onStoreUpdate.bind(this))
    this.store.dispatch(appActions.loadSession(this.props.endpoint))
    this.unlistenToHistory = this.context.history.listen(_.throttle(this.handleHistoryTransition.bind(this), 200))
  }

  componentWillUnmount() {
    this.unlistenToHistory()
  }

  onStoreUpdate() {
    this.forceUpdate()
  }

  sync() {
    this.store.dispatch(appActions.loadSession(this.props.endpoint))
  }

}

const ApplicationMessages = connect(
  Application.mapStateToMessageProps,
  Application.mapDispatchToMessageProps
)(Messages)

export default Application
