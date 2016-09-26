import React from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = (state, props) => state.reframe.modal

const mapDispatchToProps = (dispatch) => ({
  onSetDefaults(data) {
    dispatch(actions.setDefaults(data))
  },
  onLoadForm(endpoint) {
    dispatch(actions.loadForm(endpoint))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
