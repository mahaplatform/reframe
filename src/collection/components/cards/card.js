import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import Format from '../../../utils/format'
import RecordActions from '../record_actions'

class Card extends React.Component {

  static propTypes = {
    record: React.PropTypes.object,
    card: React.PropTypes.object,
    selected: React.PropTypes.array,
    recordActions: React.PropTypes.array,
    batchActions: React.PropTypes.array,
    onSelect: React.PropTypes.func
  }

  render() {
    _.templateSettings.interpolate = /#{([\s\S]+?)}/g;
    const { card, record, selected, recordActions, batchActions } = this.props
    const image = _.get(record, card.image)
    const checked = _.includes(selected, record.id)
    const url =_.template(card.url)(record)
    let classes = ['ui','segment']
    if(checked) {
      classes.push('positive')
    }
    return (
      <div className={classes.join(' ')} ref="card">
        {(() => {
          if(recordActions) {
            return <RecordActions icon="setting"
                                  button={true}
                                  record={record}
                                  recordActions={recordActions} />
          }
        })()}
        <Link to={url}>
          <div className="image">
            <img src={image} />
          </div>
          <div className="content">
            <Format {...record} format={card.content} />
          </div>
        </Link>
        {(() => {
          if(batchActions) {
            return (
              <div className="select" onClick={this._handleSelect.bind(this, record.id)}>
                <input type="checkbox" checked={checked} />
              </div>
            )
          }
        })()}
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.card).find('.dropdown').dropdown()
  }

  _handleSelect(recordId) {
    this.props.onSelect(recordId)
  }

}

export default Card
