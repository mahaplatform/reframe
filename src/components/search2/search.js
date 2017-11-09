import Searchbox from '../searchbox'
import Infinite from '../infinite'
import PropTypes from 'prop-types'
import Dynamic from './dynamic'
import Options from './options'
import React from 'react'

const BasicToken = () => (
  <div className="token">
     foo
  </div>
)

class Search extends React.Component  {

  static propTypes = {
    endpoint: PropTypes.string,
    exclude_ids: PropTypes.array,
    format: PropTypes.any,
    label: PropTypes.string,
    options: PropTypes.array,
    prompt: PropTypes.string,
    q: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
    onQuery: PropTypes.func,
    onChoose: PropTypes.func
  }

  static defaultProps = {
    format: BasicToken,
    onChoose: () => {}
  }

  render() {
    if(!this.props.endpoint) return <Options { ...this._getOptions() }  />
    return (
      <div className="reframe-search">
        <div className="reframe-search-header">
          <Searchbox { ...this._getSearchbox() } />
        </div>
        <div className="reframe-search-body">
          <Infinite {...this._getInfinite()} />
        </div>
      </div>
    )
  }

  _getOptions() {
    const { format, text, value, options, onChoose } = this.props
    return { format, text, value, options, onChoose }
  }

  _getSearchbox() {
    const { label, prompt, onQuery } = this.props
    return {
      prompt: prompt || `Find a ${label}`,
      onChange: onQuery
    }
  }

  _getInfinite() {
    const { endpoint, exclude_ids, q } = this.props
    return {
      endpoint,
      exclude_ids,
      filter: { q },
      layout: (props) => <Dynamic { ...this._getDynamic() } { ...props } />
    }
  }

  _getDynamic() {
    const { format, text, value, onChoose } = this.props
    return { format, text, value, onChoose }
  }

}

export default Search
