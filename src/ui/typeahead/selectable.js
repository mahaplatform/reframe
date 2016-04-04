import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Typeahead from './core'
import {TypeaheadDefaultResult} from './core'

export default class SelectableTypeahead extends React.Component {

  static propTypes = Typeahead.propTypes

  defaultProps = {
    onChooseResult: _.noop,
    itemComponent: TypeaheadDefaultResult
  }

  constructor(props) {
    super(props)

    this.state = {
      selectedItem: null
    }
  }

  render() {
    const {selectedItem} = this.state
    if(selectedItem !== null) {
      return (
        <div className="ui typeahead selected result">
          <this.props.itemComponent result={selectedItem} onClick={_.noop}/>
          <div className="close button" onClick={this.clear.bind(this)}><i className="ui large red remove circle icon"></i></div>
        </div>
      )
    }
    else {
      return <Typeahead ref="typeahead" {...this.props} onChooseResult={this.handleChooseResult.bind(this)}/>
    }
  }

  handleChooseResult(result) {
    this.setState({selectedItem: result})
    this.props.onChooseResult(result)
  }

  clear() {
    _.invoke(this.refs, 'typeahead.clear')
    this.setState({selectedItem: null})
  }

}