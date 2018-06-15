import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Dropdown extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    onBusy: PropTypes.func,
    onChange: PropTypes.func,
    onReady: PropTypes.func
  }

  static defaultProps = {
    placeholder: 'Select an option...',
    defaultValue: null,
    options: [],
    onBusy: (value) => {},
    onChange: (value) => {},
    onReady: () => {}
  }

  state = {
    active: false,
    value: null,
    animating: false
  }

  _handleOpen = this._handleOpen.bind(this)
  _handleClose = this._handleClose.bind(this)

  render() {
    const { options } = this.props
    return (
      <div className="reframe-dropdown">
        <div className={ this._getDropdownClass() } onClick={ this._handleOpen }>
          <div className="text" onClick={ this._handleOpen }>{ this._getLabel() }</div>
          <i className="dropdown icon"></i>
          <div className={ this._getMenuClass() }>
            { options.map((option, index) => (
              <div key={`option_${index}`} {...this._getOption(option)}>
                { option.text }
              </div>
            )) }
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady } = this.props
    if(defaultValue) this.setValue(defaultValue)
    document.addEventListener('mousedown', this._handleClose)
    onReady()
  }

  componentDidUpdate(prevProps, prevState) {
    const { active, value } = this.state
    if(value !== prevState.value) {
      this.props.onChange(value)
    }
    if(active !== prevState.active) {
      this.setState({
        animating: true
      })
      setTimeout(() => this.setState({
        animating: false
      }), 250)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this._handleClose)
  }

  _getDropdownClass() {
    const { animating, active } = this.state
    const classes = ['ui','fluid','selection','dropdown']
    if(active) classes.push('active')
    if(active && !animating) classes.push('visible')
    if(!active && animating) classes.push('visible')
    return classes.join(' ')
  }

  _getMenuClass() {
    const { active, animating } = this.state
    const classes = ['menu','transition']
    if(!animating && !active) classes.push('hidden')
    if(animating || active) classes.push('visible')
    if(animating && active) classes.push('animating slide down in')
    if(animating && !active) classes.push('animating slide down out')
    return classes.join(' ')
  }

  _getLabel() {
    const { value } = this.state
    const { options, placeholder } = this.props
    const option = _.find(options, { value })
    return option ? option.text : placeholder
  }

  _getOption(option) {
    return {
      className: 'item',
      onClick: this._handleChoose.bind(this, option.value)
    }
  }

  _handleOpen(e) {
    const { active } = this.state
    if(active || e.target.className === 'item') return
    this.setState({
      active: true
    })
  }

  _handleClose(e) {
    const { active } = this.state
    const reserved = ['item','text','dropdown icon','ui selection dropdown active visible']
    if(!active || _.includes(reserved, e.target.className)) return
    this.setState({
      active: false
    })
  }

  _handleChoose(value) {
    this.setValue(value)
  }

  setValue(value) {
    this.setState({
      value,
      active: false
    })
  }

}

export default Dropdown
