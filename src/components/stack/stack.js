import React from 'react'
import PropTypes from 'prop-types'
import matchPath from 'react-router-dom/matchPath'

class Stack extends React.Component {

  static childContextTypes = {
    stack: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    initialRoute: PropTypes.string.isRequired,
    cards: PropTypes.array,
    location: PropTypes.object,
    pathname: PropTypes.string,
    routes: PropTypes.object,
    onPop: PropTypes.func,
    onPush: PropTypes.func,
    onSet: PropTypes.func
  }

  state = {
    mounted: 1
  }

  constructor(props) {
    super(props)
    this.routes = this._collapseRoutes(props.routes, props.routes.path)
  }

  render() {
    const { cards } = this.props
    return (
      <div className="reframe-stack">
        { cards.map((card, index) => {
          const status = this._getStatus(index)
          const match = this._matchRoute(card)
          const Card = match.component
          return (
            <div key={`card_${index}`} className={`reframe-stack-card ${status}`}>
              <Card params={ match.params } />
              <div className="reframe-stack-card-cover" />
            </div>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    const { pathname } = this.context.router.route.location
    const { initialRoute, onSet } = this.props
    const cards = []
    if(initialRoute) cards.push(initialRoute)
    if(pathname !== initialRoute) cards.push(pathname)
    if(cards.length > 0) onSet(cards)
    this.setState({ mounted: cards.length })
  }

  componentDidUpdate(prevProps, prevState) {
    const { pathname, onPop, onPush } = this.props
    const { router } = this.context
    const { mounted } = this.state
    if(prevProps.pathname !== pathname) {
      if(router.history.action === 'PUSH') {
        onPush(pathname)
        setTimeout(() => this.setState({ mounted: mounted + 1 }), 50)
      } else {
        this.setState({ mounted: mounted - 1 })
        setTimeout(() => onPop(), 500)
      }
    }
  }

  getChildContext() {
    return {
      stack: {
        push: this._handlePush.bind(this),
        pop: this._handlePop.bind(this),
        reset: this._handleReset.bind(this)
      }
    }
  }

  _collapseRoutes(routes, prefix = '') {
    return routes.children.reduce((routes, route) => {
      const path = (route.path !== '/') ? route.path : ''
      if(route.children) {
        return {
          ...routes,
          ...this._collapseRoutes(route, `${prefix}${path}`)
        }
      } else {
        return {
          ...routes,
          [`${prefix}${path}`]: route.component
        }
      }
    }, {})
  }

  _matchRoute(pathname) {
    return Object.keys(this.routes).reduce((component, path) => {
      if(component) return component
      const matched = matchPath(pathname, { path, exact: true })
      if(matched) return {
        component: this.routes[path],
        params: matched.params
      }
      return null
    }, null)
  }

  _handlePush(route) {
    this.context.router.history.push(route)
  }

  _handlePop() {
    const { cards, initialRoute } = this.props
    if(cards.length === 1) return this.context.router.history.replace(initialRoute)
    this.context.router.history.goBack()
  }

  _handleReset() {
    const { cards } = this.props
    if(cards.length > 1) {
      this._handlePop()
      setTimeout(() => this._handleReset(), 500)
    }
  }

  _getStatus(index) {
    const { mounted } = this.state
    const { cards } = this.props
    const mountedIndexes = mounted - 1
    const cardIndexes = cards.length - 1
    if(index > mountedIndexes && index === cardIndexes) return 'mounting'
    if(index === mountedIndexes && index === cardIndexes ) return 'active'
    if(index === mountedIndexes && index < cardIndexes ) return 'covering'
    if(index < cardIndexes ) return 'covered'
  }

}

class StackWrapper extends React.Component {

  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    children: PropTypes.any
  }

  render() {
    return (
      <Stack { ...this.props } pathname={ this.context.router.history.location.pathname }>
        { this.props.children }
      </Stack>
    )
  }

}

export default StackWrapper
