import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from './actions'
import Component from '../component'

const Index = (id, mapEndpointsToProps) => {

  return function wrapWithConnect(WrappedComponent) {

    class Container extends React.Component {

      render() {
        const { status, data } = this.props.state
        if(status == 'loading') {
          return <div>Loading...</div>
        } else if(status == 'error') {
          return <div>Unable to load resources</div>
        } else if(status == 'loaded') {
          return <WrappedComponent {...this.props} {...data} />
        } else  {
          return null
        }
      }

      componentDidMount() {
        const resources = mapEndpointsToProps(this.props)
        _.forOwn(resources, (endpoint, prop) => {
          this.props.onFetchResource(id, prop, endpoint)
        })
      }

    }

    const validation = {
      required: []
    }

    Container = Component(validation, 'container', 'id')(Container)

    const mapStateToProps = (state, props) => ({
      id: id,
      state: state.reframe[id]
    })


    const mapDispatchToProps = {
      onFetchResource: actions.fetchResource
    }

    return connect(mapStateToProps, mapDispatchToProps)(Container)

  }

}

export default Index
