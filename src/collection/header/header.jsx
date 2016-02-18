import React from 'react'
import ReactDOM from 'react-dom'
import BatchActions from './batch_actions.jsx'
import CollectionActions from './collection_actions.jsx'
import _ from 'lodash'

class Header extends React.Component {

  static defaultProps = {
    onSetView: _.noop
  }

  render() {
    return(
      <div className="collection-header">
        <div className="ui stackable mobile vertically padded reversed grid">
          <div className="four wide column">
            {(() => {
              if(this.props.batchActions && !_.isEmpty(this.props.batchActions)) {
                return <BatchActions {...this.props} />
              }
            })()}
          </div>
          <div className="twelve wide column right aligned" ref="collectionActions">
            {(this.props.collectionActions) ? <CollectionActions {...this.props} /> : ''}
            {(() => {
              if(this.props.views && this.props.views.length > 1) {
                let viewOptions = []
                if(_.includes(this.props.views, 'table')) {
                  viewOptions.push(<a data-content="View as Table" className={this.props.view == 'table' ? 'popup icon item active' : 'popup icon item'}  onClick={this.handleView.bind(this, 'table')}><i className="fa fa-list icon" /></a>)
                }
                if(_.includes(this.props.views, 'card')) {
                  viewOptions.push(<a data-content="View as Cards" className={this.props.view == 'card' ? 'popup icon item active' : 'popup icon item'} onClick={this.handleView.bind(this, 'card')}><i className="fa fa-th icon" /></a>)
                }
                return (
                  <div className="ui icon compact menu collection-header-views">
                    {viewOptions.map(opt => opt)}
                  </div>
                )
              }
            })()}
          </div>
        </div>
      </div>
    )
  }

  handleView(type) {
    this.props.onSetView(type)
  }

}

export default Header
