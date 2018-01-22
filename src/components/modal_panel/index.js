import React from 'react'
import PropTypes from 'prop-types'

class ModalPanel extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    leftEnabled: PropTypes.bool,
    leftText: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]),
    rightEnabled: PropTypes.bool,
    rightText: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]),
    title: PropTypes.string,
    onLeftClick: PropTypes.func,
    onRightClick: PropTypes.func
  }

  static defaultProps = {
    leftEnabled: true,
    rightEnabled: true,
    onLeftClick: () => {},
    onRightClick: () => {}
  }

  render() {
    const { leftText, rightText, title } = this.props
    return (
      <div className="reframe-modal-panel">
        <div className="reframe-modal-panel-header">
          { leftText ?
            <div className="reframe-modal-panel-header-navigation" onClick={ this._handleLeftClick.bind(this) }>
              { leftText }
            </div> :
            <div className="reframe-modal-panel-header-navigation" />
          }
          <div className="reframe-modal-panel-header-title">
            { title }
          </div>
          { rightText ?
            <div className="reframe-modal-panel-header-navigation" onClick={ this._handleRightClick.bind(this) }>
              { rightText }
            </div> :
            <div className="reframe-modal-panel-header-navigation" />
          }
        </div>
        <div className="reframe-modal-panel-body">
          { this.props.children }
        </div>
      </div>
    )
  }

  _getLeftClass() {
    const { leftEnabled } = this.props
    const classes = ['reframe-modal-panel-header-navigation']
    if(!leftEnabled) classes.push('disabled')
    return classes.join(' ')
  }

  _getRightClass() {
    const { rightEnabled } = this.props
    const classes = ['reframe-modal-panel-header-navigation']
    if(!rightEnabled) classes.push('disabled')
    return classes.join(' ')
  }

  _handleLeftClick() {
    this.props.onLeftClick()
  }

  _handleRightClick() {
    this.props.onRightClick()
  }

}

export default ModalPanel
