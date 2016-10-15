import React from 'react'
import _ from 'lodash'
import states from './states'
import countries from './countries'
import timezones from './timezones'

const UNINITIALIZED = 'uninitialized'
// const AWAITING = 'awaiting'
// const SYNCING = 'syncing'
// const READY = 'ready'
// const ERROR = 'error'

class DynamicControl extends React.Component {

  static propTypes = {
    datasource: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.shape({
        source: React.PropTypes.string,
        key: React.PropTypes.string,
        value: React.PropTypes.string
      })
    ])
  }

  static defaultProps = {
    datasource: null
  }

  constructor(props) {
    super(props)
    this.state = {
      status: UNINITIALIZED
    }
  }

  render() {
    const { datasource } = this.props
    const controlProps = _.omit(this.props, ['datasource'])
    let finalProps = {
      ...controlProps,
      status: this.state.status
    }
    if(datasource) {
      const source = (_.isString(datasource)) ? datasource : datasource.source
      let key = (datasource.key) ? datasource.key : null
      let value = (datasource.value) ? datasource.value : null
      if(source == 'countries') {
        key = key || 'abbreviation'
        value = value || 'name'
        finalProps.options = _.map(this.getCountries(), function(country) {
          return { key: country[key], value: country[value] }
        })
      } else if(source == 'states') {
        key = key || 'abbreviation'
        value = value || 'name'
        finalProps.options = _.map(this.getStates(), function(state) {
          return { key: state[key], value: state[value] }
        })
      } else if(source == 'timezones') {
        key = key || 'offset'
        value = value || 'name'
        finalProps.options = _.map(this.getTimezones(), function(timezone) {
          return { key: timezone[key], value: timezone[value] }
        })
      }
    }
    let mappedChildren = []
    mappedChildren = React.Children.map(this.props.children, c => React.cloneElement(c, finalProps))
    return React.createElement('div', {}, ...mappedChildren)
  }

  getCountries() {
    return _.map(countries, function(country) {
      return { abbreviation: country[0], name: country[1] }
    })
  }

  getStates() {
    return _.map(states, function(state) {
      return { abbreviation: state[0], name: state[1] }
    })
  }

  getTimezones() {
    return _.map(timezones, function(timezone) {
      return { offset: timezone[0], name: timezone[1] }
    })
  }

}

export default DynamicControl
