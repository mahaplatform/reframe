import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../form/omni'

export default class CollectionFilters extends React.Component {
  static defaultProps = {
    onClear: () => {},
    onFilter: () => {}
  }
  render() {
    return (
      <div style={{visibility: this.props.visibility, display: this.props.display}}>
        <Form
          ref="filter_form"
          id="collection_filter_form"
          style={{marginBottom: 12}}
          sections={[{fields: this.props.fields}]}
          onFieldChange={_.debounce(() => this.refs.filter_form.submit(), 300)}
          onSubmit={this.props.onFilter}
          buttons={[
            {color: 'neutral', label: 'Clear', action: this.clear.bind(this)}
          ]}
        />
      </div>
    )
  }

  clear() {
    this.refs.filter_form.clear("collection_filter_form")
    this.props.onClear()
  }

  fill(data) {
    this.refs.filter_form.fill(data)
  }
}