import matchPath from 'react-router-dom/matchPath'
import PropTypes from 'prop-types'
import React from 'react'
import Stack from './stack'

class RouterStack extends React.Component {

  static childContextTypes = {
    stack: PropTypes.object
  }

  static propTypes = {
    action: PropTypes.string,
    pathname: PropTypes.string,
    rootPath: PropTypes.string,
    routes: PropTypes.object
  }

  static defaultProps = {
    rootPath: '/'
  }

  state = {
    cards: []
  }

  render() {
    const { cards } = this.state
    return <Stack cards={ cards } />
  }

  componentDidMount() {
    const { pathname, rootPath } = this.props
    if(pathname === rootPath) return
    const card = this._matchRoute(pathname)
    this.setState({
      cards: [ card ]
    })
  }

  componentDidUpdate(prevProps) {
    const { action, pathname } = this.props
    const { mounted } = this.state
    if(prevProps.pathname !== pathname) {
      if(action === 'push') {
        const card = this._matchRoute(pathname)
        this._handlePush(card)
        setTimeout(() => this.setState({ mounted: mounted + 1 }), 50)
      } else if(action === 'pop') {
        this.setState({ mounted: mounted - 1 })
        setTimeout(this._handlePop.bind(this), 500)
      }
    }
  }

  getChildContext() {
    const { cards } = this.state
    return {
      stack: {
        push: this._handlePush.bind(this),
        pop: this._handlePop.bind(this)
      }
    }
  }

  _handlePush(card) {
    this.setState({
      cards: [
        ...this.state.cards,
        card
      ]
    })
  }

  _handlePop() {
    const cards = this.state.cards.slice(0, -1)
    this.setState({ cards })
  }

  _matchRoute(pathname) {
    const { routes } = this.props
    return Object.keys(routes).reduce((component, path) => {
      if(component) return component
      const matched = matchPath(pathname, { path, exact: true })
      if(!matched) return null
      return {
        pathname,
        component: routes[path],
        props: {
          pathname,
          params: matched.params
        }
      }
    }, null)
  }

}

class RouterStackWrapper extends React.Component {

  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    children: PropTypes.any,
    routes: PropTypes.object
  }

  render() {
    return (
      <RouterStack { ...this._getRouter() }>
        { this.props.children }
      </RouterStack>
    )
  }

  _getRouter() {
    const { action, pathname } = this._getHistory()
    return {
      ...this.props,
      pathname,
      action: action.toLowerCase()
    }
  }

  _getHistory() {
    const { router } = this.context
    return router.history ? {
      action: router.history.action,
      pathname: router.history.location.pathname
    } : router
  }

}

export default RouterStackWrapper
