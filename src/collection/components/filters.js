import React from 'react'
import Form from '../../form'

class Filters extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    filters: React.PropTypes.array,
    onFilterRecords: React.PropTypes.func
  }

  render() {
    return (
      <div className="collection-filter">
        <Form {...this._getForm()} />
      </div>
    )
  }

  _getForm() {
    const { id, filters } = this.props
    return {
      id: `${id}-filter`,
      onChange: this._handleFilterRecords.bind(this),
      style: 'basic',
      sections: filters,
      buttons: null
    }
  }

  _handleFilterRecords(data) {
    const { id, onFilterRecords } = this.props
    onFilterRecords(id, data)
  }

}

export default Filters
