import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from './actions'

const Index = (rules, namespace, identifier = null) => {

  return function(WrappedComponent) {

    class Component extends React.Component {

      constructor(props) {
        super(props)
        this.state = {
          errors: this._validateConfig(rules, props)
        }
      }

      render() {
        const id = (identifier) ? _.get(this.props, identifier) : namespace
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
        if(rules.required) {
          rules.required.map(required => {
            if(!_.get(config, required)) {
              errors.push(`You must specify the {${required}} property`)
            }
          })
        }
        return errors
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
