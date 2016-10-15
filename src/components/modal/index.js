import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Index from './components/index'

class Modal extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    open: React.PropTypes.bool
  }

  static defaultProps = {
    title: 'Modal Window',
    open: false
  }

  render() {
    const { children } = this.props
    return (
      <Index>
        {children}
      </Index>
    )
  }

}

const mapStateToProps = (state) => state.modal

const mapDispatchToProps = {
  onSetDefaults: actions.setDefaults,
  onLoadForm: actions.loadForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
