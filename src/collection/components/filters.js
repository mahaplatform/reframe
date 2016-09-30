import React from 'react'
import Form from '../../form'

class Filters extends React.Component {

  static propTypes = {
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
    const { filters } = this.props
    return {
      onChange: this._handleFilterRecords.bind(this),
      style: 'basic',
      sections: filters,
      buttons: null
    }
  }

  _handleFilterRecords(data) {
    this.props.onFilterRecords(data)
  }

}

export default Filters
