import React from 'react'
import PropTypes from 'prop-types'

class Stack extends React.Component {

  static propTypes = {
    cards: PropTypes.array
  }

  static defaultProps = {
    cards: []
  }

  constructor(props) {
    super(props)
    this.state = {
      cards: props.cards,
      mounted: 0
    }
  }

  render() {
    const { cards } = this.state
    return (
      <div className="reframe-stack">
        { cards.map((card, index) => (
          <div key={ `card_${card.pathname}` } className={ this._getClass(index) }>
            <card.component params={ card.params } pathname={ card.pathname } />
          </div>
        )) }
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    const { cards } = this.props
    if(prevProps.cards.length < cards.length) this._handlePush()
    if(prevProps.cards.length > cards.length) this._handlePop()
  }

  _getClass(index) {
    const classes = ['reframe-stack-card']
    classes.push(this._getStatus(index))
    return classes.join(' ')
  }
  
  _getStatus(index) {
    const mountedIndexes = this.state.mounted - 1
    const cardIndexes = this.state.cards.length - 1
    if(index > mountedIndexes && index === cardIndexes) return 'mounting'
    if(index === mountedIndexes && index === cardIndexes ) return 'active'
    if(index === mountedIndexes && index < cardIndexes) return 'covering'
    if(index < cardIndexes ) return 'covered'
  }
  
  _handlePush() {
    const { cards } = this.props
    this.setState({ cards })
    setTimeout(() => this.setState({ mounted: this.state.mounted + 1 }), 100)    
  }
  
  _handlePop() {
    const { cards } = this.props
    this.setState({ mounted: this.state.mounted - 1 })
    setTimeout(() => this.setState({ cards }), 500)
  }
  
}

export default Stack
