import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from './actions'

const Index = (namespace, identifier = null) => {

  return function(WrappedComponent) {

    class Component extends React.Component {

      render() {
        if(this.props.initialized) {
          return <WrappedComponent {...this.props} />
        } else {
          return <div />
        }
      }

      componentDidMount() {
        this._handleInitialize()
      }
      componentWillUnmount() {
        this._handleTerminate()
      }

      _handleInitialize() {
        if(identifier) {
          const id = _.get(this.props, identifier)
          this.props.onAddComponent(namespace, id)
        } else  {
          this.props.onAddComponent(namespace)
        }
      }

      _handleTerminate() {
        if(identifier) {
          const id = _.get(this.props, identifier)
          this.props.onRemoveComponent(namespace, id)
        } else  {
          this.props.onRemoveComponent(namespace)
        }
      }

    }

    const mapStateToProps = (state, props) => {
      if(identifier) {
        const id = _.get(props, identifier)
        return {
          initialized: (state[id] !== undefined)
        }
      } else  {
        return {
          initialized: (state[namespace] !== undefined)
        }
      }

    }

    const mapDispatchToProps = {
      onAddComponent: actions.addComponent,
      onRemoveComponent: actions.removeComponent
    }

    return connect(mapStateToProps, mapDispatchToProps)(Component)

  }

}

export default Index
