import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class Searchbox extends React.Component {

  static propTypes = {
    q: PropTypes.string,
    prompt: PropTypes.string,
    onAbort: PropTypes.func,
    onChange: PropTypes.func,
    onLookup: PropTypes.func,
    onType: PropTypes.func
  }

  static defaultProps = {
    prompt: 'Search...'
  }

  render() {
    const { prompt, q } = this.props
    return (
      <div className="reframe-searchbox">
        <div className="reframe-searchbox-icon">
          <i className="search icon" />
        </div>
        <div className="reframe-searchbox-input">
          <div className="ui input">
            <input type="text" placeholder={ prompt } onChange={ this._handleType.bind(this) } ref={ (node) => this.query = node } value={ q } />
          </div>
        </div>
        { q.length > 0 &&
          <div className="reframe-searchbox-icon" onClick={ this._handleAbort.bind(this) }>
            <i className="remove circle icon" />
          </div>
        }
      </div>
    )
  }

  componentDidMount() {
    this._handleLookup = _.throttle(this.props.onChange, 500)
  }

  _handleType() {
    const q = this.query.value
    this.props.onType(q)
    this._handleLookup(q)
  }

  _handleAbort() {
    this.props.onAbort()
    this.props.onChange('')
  }

}

export default Searchbox
