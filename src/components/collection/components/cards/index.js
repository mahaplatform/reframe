import React from 'react'
import Card from './card'

class Cards extends React.Component {

  static propTypes = {
    records: React.PropTypes.array,
    card: React.PropTypes.object,
    selected: React.PropTypes.array,
    recordActions: React.PropTypes.array,
    batchActions: React.PropTypes.array,
    onSelect: React.PropTypes.func
  }

  render() {
    const { card, records, selected, recordActions, batchActions,onSelect } = this.props
    return (
      <div className="cards">
        {records.map((record, index) => {
          return (
            <div key={`card_${index}`} className="card">
              <Card card={card}
                    selected={selected}
                    recordActions={recordActions}
                    batchActions={batchActions}
                    record={record}
                    onSelect={onSelect} />
            </div>
        )
        })}
      </div>
    )
  }

}

export default Cards
