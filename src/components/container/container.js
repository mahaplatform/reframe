import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from './actions'

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
      this.props.onFetchResource(id, prop, endpoint)
    })
  }

}

const mapStateToProps = (state, props) => ({ state })

const mapDispatchToProps = {
  onFetchResource: actions.fetchResource
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
