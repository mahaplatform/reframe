import React from 'react'
import ReactDOM from 'react-dom'
import Thead from './thead.js'
import Tbody from './tbody.js'
import _ from 'lodash'

class Table extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      columnWidths: null // Start with them as unknown
    }
    this.listeners = []
  }

  render() {
    return(
      <div className="ui basic section collection-table">
        <table className="ui unstackable compact striped table sortable" data-reframe-table-id={this.props.id}>
          <Thead {...this.props} {...this.state} columnWidths={this.sampleColumnWidths()}/>
          {this.props.sticky? <Thead surrogate {...this.props} {...this.state} columnWidths={this.sampleColumnWidths()}/> : null}
          <Tbody {...this.props} {...this.state} />
        </table>
        {(() => {
          if(this.props.status === 'LOADING') {
            return (
              <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
              </div>
            )
          }
          else {
            return null
          }
        })()}
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    if(this.props.status !== prevProps.status || !_.isEqual(prevProps.visible, this.props.visible)) {
      // Force a re-render to realign table headers after content loads and displays
      this.forceUpdate()
    }
  }

  componentDidMount() {
    let selfTrigger = (fn) => {
      var self = this;
      return _.wrap(fn, (ffn, ...args) => {
        if(_.isArray(args[0])) {
          args[0][0] === self.props.componentId ? ffn.bind(self)(..._.drop(args[0], 1)) : _.noop
        }
        else {
          args[0] === self.props.componentId ? ffn.bind(self)(..._.drop(args, 1)) : _.noop
        }
      })
    }
    // If we're in sticky mode, keep an eye on the window size
    this.resizeHandler = _.throttle(this.handleResize.bind(this), 300)
    window.addEventListener('resize', this.resizeHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler)
  }

  handleResize(e) {
    if(this.props.sticky) {
      this.forceUpdate()
    }
  }

  handleSort(key) {
    let order = (key == this.state.sort.key && this.state.sort.order == 'ascending') ? 'descending' : 'ascending'
    this.setState({ sort: { key: key, order: order } })
    _.defer(_.partial(this.props.actions.sort, {key, order}))
  }

  sampleColumnWidths() {
    // Aaaaaah this is so bad to just read the DOM like this, dip me in boiling oil and hear me scream
    // but honestly this is easier than dealing with passing around information that is only available
    // post-render. Doesn't fit well in the React hierarchy we've set up.
    return $(`table[data-reframe-table-id=${this.props.id}]`)
      .find('tbody tr')
      .first()
      .find('td')
      .map((i, td) => $(td).outerWidth())
      .toArray()
  }

}

export default Table
