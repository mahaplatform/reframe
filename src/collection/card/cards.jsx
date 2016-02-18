import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import Card from './card.jsx'

class Cards extends React.Component {

  render() {
    return (<div className="collection-card">
      {(() => {
        if(_.isEmpty(this.props.records)) {
          return <p>{this.props.empty}</p>
        } else {
          return (
            <div className="ui cards">
              { this.props.records.map((record, index) => {
                return <Card key={`card_${index}`} {...this.props} {...record} batchActions={this.props.batchActions} recordActions={this.props.recordActions} />
              })}
            </div>
          )
        }
      })()}
    </div>)
  }

}

export default Cards
