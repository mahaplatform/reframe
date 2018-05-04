import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Scrollpane extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    notificationPercent: PropTypes.number,
    onReachBottom: PropTypes.func
  }

  static defaultProps = {
    notificationPercent: 30,
    onReachBottom: null
  }

  state = {
    signpost: false
  }

  headers = []

  notified = false

  render() {
    const { children } = this.props
    const { signpost } = this.state
    return (
      <div className="reframe-scrollpane">
        <div className="reframe-scrollpane-inner" ref={ (node) => this.scrollpane = node }>
          { children }
        </div>
        <CSSTransition in={ signpost } classNames="popin" timeout={ 250 } mountOnEnter={ true } unmountOnExit={ true }>
          <div className="chat-signpost-bottom" onClick={ this._handleScrollToTop.bind(this) }>
            <i className="fa fa-chevron-up" />
          </div>
        </CSSTransition>
      </div>
    )
  }

  componentDidMount() {
    this.fixed = -1
    this.headers = this._getHeaders()
    this.listener = _.throttle(this._scrollListener.bind(this), 100)
    this._attachScrollListener()
  }

  componentDidUpdate() {
    this.notified = false
  }

  componentWillUnmount() {
    this._detachScrollListener()
  }

  _attachScrollListener() {
    this.scrollpane.addEventListener('scroll', this.listener, true)
    this.scrollpane.addEventListener('resize', this.listener, true)
    this._scrollListener()
  }

  _detachScrollListener() {
    this.scrollpane.removeEventListener('scroll', this.listener, true)
    this.scrollpane.removeEventListener('resize', this.listener, true)
  }

  _getHeaders() {
    const childNodes = Array.from(this.scrollpane.getElementsByClassName('reframe-scrollpane-header'))
    return childNodes.reduce((headers, node) => {
      const top = parseInt(node.getBoundingClientRect().top - this.scrollpane.getBoundingClientRect().top)
      return [
        ...headers,
        {
          node,
          top,
          fixed: false
        }
      ]
    }, [])
  }

  _scrollListener() {
    const { signpost } = this.state
    const { notificationPercent, onReachBottom } = this.props
    const bottomPosition = this.scrollpane.scrollHeight - (this.scrollpane.scrollTop + this.scrollpane.offsetHeight)
    const percentRemaining = (bottomPosition / this.scrollpane.scrollHeight) * 100
    const showSignpost = this.scrollpane.scrollTop > 100
    if(signpost !== showSignpost) this.setState({
      signpost: showSignpost
    })
    if(!this.notified && percentRemaining <= notificationPercent) {
      if(onReachBottom) onReachBottom()
      this.notified = true
    }
    if(this.headers.length > 0) {
      this.headers.map((header, index) => {
        const node = header.node
        if(!header.fixed && index > this.fixed && this.scrollpane.scrollTop >= header.top) {
          this.scrollpane.style.paddingTop = `${node.offsetHeight}px`
          node.style.position = 'absolute'
          node.style.top = 0
          node.style.left = 0
          node.style.right = 0
          this.fixed = index
          this.headers[index].fixed = true
        } else if(header.fixed && index <= this.fixed && this.scrollpane.scrollTop < header.top) {
          if(index === 0) this.scrollpane.removeAttribute('style')
          node.removeAttribute('style')
          this.headers[index].fixed = false
          this.fixed = this.fixed - 1
        }
      })
    }
  }

  _handleScrollToTop() {
    this.scrollpane.scrollTop = 0
  }

}

export default Scrollpane
