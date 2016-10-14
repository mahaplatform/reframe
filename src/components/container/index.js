import React from 'react'
import { Provider, connect } from 'react-redux'
import CreateStore from '../../store'
import _ from 'lodash'
import * as actions from './actions'
import reducer from './reducer'

const Index = (mapEndpointsToProps) => {

  return function wrapWithConnect(WrappedComponent) {

    class Container extends React.Component {

      render() {
        const { status, data } = this.props.state
        if(status === 'loading') {
          return <div>Loading...</div>
        } else if(status === 'error') {
          return <div>Unable to load resources</div>
        } else if(status === 'loaded') {
          return <WrappedComponent {...this.props} {...data} />
        } else  {
          return null
        }
      }

      componentDidMount() {
        const resources = mapEndpointsToProps(this.props)
        _.forOwn(resources, (endpoint, prop) => {
          this.props.onFetchResource(prop, endpoint)
        })
      }

    }

    const mapStateToProps = (state, props) => ({ state })

    const mapDispatchToProps = {
      onFetchResource: actions.fetchResource
    }

    Container = connect(mapStateToProps, mapDispatchToProps)(Container)

    class Root extends React.Component {

      render() {
        const store = CreateStore(reducer)
        return (
          <Provider store={store}>
            <Container {...this.props} />
          </Provider>
        )
      }

    }

    return Root

  }

}

export default Index
