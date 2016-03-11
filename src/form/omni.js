import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import LoadingContainer, {LoadingState, PresentState, ErrorState} from 'snax/lib/containers/loading'
import CoreForm from './core.js'
import API from '../api'

export default class OmniForm extends React.Component {
  static propTypes = {
    endpoint: React.PropTypes.string,
    action: React.PropTypes.string.constructor,
    mode: React.PropTypes.oneOf('post', 'put', 'patch', 'get')
  }

  static defaultProps = {
    mode: 'get'
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      submitting: false,
      error: false
    }
  }

  render() {
    return (
      <LoadingContainer isLoading={this.state.loading} isError={this.state.error}>
        <LoadingState>
          <div className="ui segment">
            <div className="ui active inverted dimmer">
              <div className="ui text loader">Loading</div>
            </div>
            <p/>
          </div>
        </LoadingState>
        <PresentState>
          <CoreForm {...this.applyProps()} {...this.attachCallbacks()} />
        </PresentState>
      </LoadingContainer>
    )
  }

  attachCallbacks() {
    return {
      onSubmit(data) {
        if(this.props.action) {
          this.setState({submitting: true})
          API[this.props.mode](this.props.action, data)
            .then()
            .catch()
            .finally(() => this.setState({submitting: false}))
        }
        else {
          this.props.onSubmit(data)
        }
      }
    }
  }

  applyProps() {

  }

  transformFields(fields) {

  }


}
