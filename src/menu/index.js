import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import TopbarMenu from './topbar'
import OffcanvasMenu from './offcanvas'
import Searchbar from './searchbar'
import {matches} from '../utils/dom'

const TOPBAR = Symbol("topbar mode")
const OFFCANVAS = Symbol("offcanvas mode")

class Menu extends React.Component {

  static propTypes = {
    menu: React.PropTypes.shape({
      left: React.PropTypes.array,
      right: React.PropTypes.array,
      search: React.PropTypes.object
    })
  }

  static defaultProps = {
    search: {
      endpoint: '/admin/search',
      queryParam: 'q'
    },
    breakpoint: 800
  }

  constructor(props) {
    super(props)
    this.state = { displayMode: TOPBAR, visible: false }
    _.defer(this.onViewportResize.bind(this))
  }

  render() {
    switch (this.state.displayMode) {
      case TOPBAR:
        return <TopbarMenu {...this.props} ref="menu" />
      case OFFCANVAS: 
        return (
          <div>
            <Searchbar {...this.props} onClickMenuButton={this.toggleMenu.bind(this)} />
            <OffcanvasMenu {...this.props} visible={this.state.visible} onClose={this.closeMenu.bind(this)} ref="menu" />
          </div>
        )
    }
      
  }

  componentDidMount() {
    this.resizeListener = _.throttle(this.onViewportResize.bind(this), 100)
    this.closeListener = this.closeMenu.bind(this)
    window.addEventListener('resize', this.resizeListener)
    document.addEventListener('click', this.closeListener)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener)
    document.removeEventListener('click', this.closeListener)
  }

  onViewportResize() {
    let w = document.body.offsetWidth
    if(w <= this.props.breakpoint) {
      this.setState({ displayMode: OFFCANVAS })
    }
    else {
      this.setState({ displayMode: TOPBAR })
    }
  }

  toggleMenu() {
    this.setState({visible: !this.state.visible})
  }

  closeMenu(event) {
    if(matches(event.target, '.ui.sidebar *') && (matches(event.target, 'a.item') || matches(event.target, 'a.item *'))) {
      this.setState({ visible: false })
    }
  }

}

export default Menu
