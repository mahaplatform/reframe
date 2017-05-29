import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Scrollpane extends React.Component {

  static PropTypes = {
    notificationPercent: PropTypes.number,
    onReachBottom: PropTypes.func
  }

  static defaultProps = {
    notificationPercent: 30,
    onReachBottom: null
  }

  constructor(props) {
    super(props)
    this.attached = false
  }

  render() {
    const { children } = this.props
    return (
      <div className="reframe-scrollpane" ref="scrollpane">
        { children }
      </div>
    )
  }

  componentDidMount() {
    this.listener = _.throttle(this._scrollListener.bind(this), 100)
    this._attachScrollListener()
  }

  componentDidUpdate() {
    this._attachScrollListener()
  }

  componentWillUnmount() {
    this._detachScrollListener()
  }

  _attachScrollListener() {
    const { scrollpane } = this.refs
    if(this.attached || scrollpane.scrollHeight <= scrollpane.offsetHeight) return
    scrollpane.addEventListener('scroll', this.listener, true)
    scrollpane.addEventListener('resize', this.listener, true)
    this._scrollListener()
    this.attached = true
  }

  _detachScrollListener() {
    const { scrollpane } = this.refs
    if(!this.attached) return
    scrollpane.removeEventListener('scroll', this.listener, true)
    scrollpane.removeEventListener('resize', this.listener, true)
    this.attached = false
  }

  _scrollListener() {
    const { scrollpane } = this.refs
    const { notificationPercent, records, status, total, onReachBottom } = this.props
    const bottomPosition = scrollpane.scrollHeight - (scrollpane.scrollTop + scrollpane.offsetHeight)
    const percentRemaining = (bottomPosition / scrollpane.scrollHeight) * 100
    if(percentRemaining <= notificationPercent && !this.notified) {
      if(onReachBottom) onReachBottom()
      this._detachScrollListener()
    }
  }

}

export default Scrollpane
