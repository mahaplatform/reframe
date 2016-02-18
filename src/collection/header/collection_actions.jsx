import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

class CollectionActions extends React.Component {

  render() {
    return (
      <div className="ui icon compact menu collection-header-tools">
        { this.props.collectionActions.map((action, index) => {
          let classes=['fa','icon']
          classes.push(action.icon)
          return <a key={`collection_action_${index}`} data-content={action.tip} className="popup icon item" onClick={action.handler}><i className={classes.join(' ')} /></a>
        })}
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.collectionActions).find('a').popup({ position: 'bottom center', exclusive: true, variation: 'inverted' })
  }

}

export default CollectionActions
