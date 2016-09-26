import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from './actions'

const Index = (rules, namespace, identifier) => {

  return function(WrappedComponent) {

    class Component extends React.Component {

      constructor(props) {
        super(props)
        this.state = {
          errors: this._validateConfig(rules, props)
        }
      }

      render() {
        const id = _.get(this.props, identifier)
        if(!_.isEmpty(this.state.errors)) {
          console.warn(this.state.errors)
          return (
            <div className="ui negative message">
              <p>Unable to load component <strong>{id}</strong></p>
            </div>
          )
        } else if(this.props.initialized) {
          return <WrappedComponent {...this.props} />
        } else {
          return <div />
        }
      }

      componentDidMount() {
        if(_.isEmpty(this.state.errors)) {
          this._handleInitialize()
        }
      }
      componentWillUnmount() {
        this._handleTerminate()
      }

      _validateConfig(rules, config) {
        let errors = []
        rules.required.map(required => {
          if(!_.get(config, required)) {
            errors.push(`You must specify the {${required}} property`)
          }
        })
        return errors
      }

      _handleInitialize() {
        const id = _.get(this.props, identifier)
        this.props.onAddComponent(namespace, id)
      }

      _handleTerminate() {
        const id = _.get(this.props, identifier)
        this.props.onRemoveComponent(namespace, id)
      }

    }

    const mapStateToProps = (state, props) => {
      const id = _.get(props, identifier)
      return {
        initialized: (state.reframe[id] !== undefined)
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
