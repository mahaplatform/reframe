import React from 'react'
import ReactDOM from 'react-dom'
import appActions from './appActions'
import {createStore, applyMiddleware} from 'redux'
import {connect} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer'
import Messages from './messages'

class Application extends React.Component {

  constructor(props) {
    super(props)
    this.store = createStore(appReducer, applyMiddleware(thunkMiddleware))
  }

  static childContextTypes = {
    session: React.PropTypes.object,
    config: React.PropTypes.object,
    user: React.PropTypes.object
  }

  getChildContext() {
    return {
      session: this.buildSessionObject(),
      config: this.store.getState().config,
      user: this.store.getState().user
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
      showMessage(message, type = 'info') {
        store.dispatch(appActions.showFlashMessage(message, type))
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
        dispatch(appActions.dismissFlashMessage(id))
      }
    }
  }

  componentDidMount() {
    this.store.subscribe(this.onStoreUpdate.bind(this))
    this.store.dispatch(appActions.loadSession(this.props.endpoint))
  }

  onStoreUpdate() {
    this.forceUpdate()
  }

}

const ApplicationMessages = connect(
  Application.mapStateToMessageProps,
  Application.mapDispatchToMessageProps
)(Messages)

export default Application
