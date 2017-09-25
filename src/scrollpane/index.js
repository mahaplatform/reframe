import React from 'react'
import PropTypes from 'prop-types'
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

  headers = []

  notified = false

  render() {
    const { children } = this.props
    return (
      <div className="reframe-scrollpane">
        <div className="reframe-scrollpane-inner" ref={ (node) => this.scrollpane = node}>
          { children }
        </div>
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
    const { notificationPercent, onReachBottom } = this.props
    const bottomPosition = this.scrollpane.scrollHeight - (this.scrollpane.scrollTop + this.scrollpane.offsetHeight)
    const percentRemaining = (bottomPosition / this.scrollpane.scrollHeight) * 100
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
          node.style.zIndex = 2
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

}

export default Scrollpane
