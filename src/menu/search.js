import React from 'react'
import Typeahead from '../ui/typeahead'
import Config from '../utils/config'
import Logger from '../utils/logger'
import _ from 'lodash'

export default class Search extends React.Component {

  static propTypes = {
    endpoint:      React.PropTypes.string,
    resultField:   React.PropTypes.string,
    query:         React.PropTypes.string,
    itemComponent: React.PropTypes.element,
    placeholder:   React.PropTypes.string
  }

  static defaultProps = {
    placeholder: 'Search'
  }

  static contextTypes = {
    history: React.PropTypes.object
  }

  constructor(props) {
    super(props)

    this.endpoint = props.endpoint || Config.get('menu.search.endpoint', '/search')
    this.resultField = props.resultField || Config.get('menu.search.resultField', 'results')
    this.query    = props.query || Config.get('menu.search.queryParam', 'q')
  }

  render() {
    return (
      <div className="ui transparent search item">
        <i className="search icon"></i>
        <Typeahead
          ref="input"
          categories
          endpoint={this.endpoint}
          query={this.query}
          resultField={this.resultField}
          placeholder={this.props.placeholder}
          onChooseResult={this.chooseResult.bind(this)}
          itemComponent={this.props.itemComponent}
          clearOnBlur
        />
      </div>
    )
  }

  clear() {
    this.refs.input.clear()
  }

  chooseResult(result, type) {
    Logger.log(type, result)
    const route = _.get(this.props.routes, type, null)
    if(route) {
      this.context.history.push(_.template(route, {interpolate: Config.get('menu.search.urlInterpolate', _.templateSettings.interpolate)})(result))
    }
    this.refs.input.clear()
  }
}
