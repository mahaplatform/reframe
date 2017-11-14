import React from 'react'
import PropTypes from 'prop-types'

class Carousel extends React.Component {

  static propTypes = {
    active: PropTypes.number,
    direction: PropTypes.string,
    slides: PropTypes.array,
    total: PropTypes.number,
    onSetTotal: PropTypes.func,
    onGoto: PropTypes.func,
    onNext: PropTypes.func,
    onPrevious: PropTypes.func
  }

  static defaultProps = {
    slides: []
  }

  _swipe = {}

  state = {
    active: 0,
    transitioning: false
  }

  render() {
    const { slides, total } = this.props
    return (
      <div className="reframe-carousel">
        { total > 0 &&
          <div { ...this._getTheatre() }>
            { total > 1 &&
              <div className="reframe-carousel-previous" onClick={ this._handlePrevious.bind(this) }>
                <i className="fa fa-fw fa-chevron-left" />
              </div>
            }
            <div className="reframe-carousel-slides">
              { slides.map((slide, index) => (
                <div key={`slide_${index}`} className={ this._getSlideClass(index) }>
                  { slide }
                </div>
              ))}
            </div>
            { total > 1 &&
              <div className="reframe-carousel-next" onClick={ this._handleNext.bind(this) }>
                <i className="fa fa-fw fa-chevron-right" />
              </div>
            }
          </div>
        }
        { total > 1 &&
          <div className="reframe-carousel-pagination">
            { [...Array(total)].map((i, index) => (
              <div key={`button_${index}`} className={ this._getButtonClass(index) } onClick={ this._handleGoto.bind(this, index) } />
            ))}
          </div>
        }
      </div>
    )
  }

  componentDidMount() {
    const { slides, onSetTotal } = this.props
    onSetTotal(slides.length)
  }

  componentDidUpdate(prevProps) {
    const { active, slides, onSetTotal } = this.props
    if(slides.length !== prevProps.slides.length) {
      onSetTotal(slides.length)
    }
    if(active != prevProps.active) {
      setTimeout(() => this.setState({ transitioning: true }), 100)
      setTimeout(() => this.setState({ active, transitioning: false }), 600)
    }
  }

  _getSlideClass(index) {
    const curr = this.state.active
    const next = this.props.active
    const { direction } = this.props
    const { transitioning } = this.state
    const classes = ['reframe-carousel-slide']
    const right = next !== curr && direction === 'right'
    const left = next !== curr && direction === 'left'
    if(index === curr) classes.push('active')
    if(left && index === next) classes.push('next')
    if(right && index === next) classes.push('prev')
    if(transitioning && left && (index === next || index === curr)) classes.push('left')
    if(transitioning && right && (index === next || index === curr)) classes.push('right')
    return classes.join(' ')
  }

  _getButtonClass(index) {
    const { active } = this.props
    const classes = ['reframe-carousel-pagination-button']
    if(index === active) classes.push('active')
    return classes.join(' ')
  }

  _getTheatre() {
    return {
      className: 'reframe-carousel-theatre',
      onTouchStart: this._handleTouchStart.bind(this),
      onTouchMove: this._handleTouchMove.bind(this),
      onTouchEnd: this._handleTouchEnd.bind(this)
    }
  }

  _handlePrevious() {
    this.props.onPrevious()
  }

  _handleNext() {
    this.props.onNext()
  }

  _handleGoto(index) {
    this.props.onGoto(index)
  }

  _handleTouchStart(e) {
    this._swipe = { x: e.touches[0].clientX }
  }

  _handleTouchMove(e) {
    if (e.changedTouches && e.changedTouches.length) {
      this._swipe.swiping = true
    }
  }

  _handleTouchEnd(e) {
    const touch = e.changedTouches[0]
    const dist = touch.clientX - this._swipe.x
    if (this._swipe.swiping && Math.abs(dist) > 30 ) {
      if(dist > 0) this.props.onPrevious()
      if(dist < 0) this.props.onNext()
    }
    this._swipe = {}
  }

}

export default Carousel
