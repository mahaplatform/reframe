import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import {PlainWindow} from '../modal/window'

export default class ExportModal extends React.Component {

  static defaultProps ={
    autoClose: true
  }

  render() {
    const modalOptions = {
      title: "Export Data",
      onApprove: this.props.onApprove,
      onCancel: this.props.onCancel,
      onClose: this.props.onCancel,
      buttons: [
        { color: 'positive', label: 'Export'}
      ]
    }
    const [colA, colB] = _(this.props.fields)
      .map((f, i) => [f, i])
      .partition(([f, i]) => i % 2 == 0)
      .map(col => {
        return _.map(col, ([f]) => f)
      })
      .value()


    const [selectedFields, availableFields] = _.partition(this.props.fields, f => f.visible)

    return (
      <PlainWindow {...modalOptions}>
        <div className="content" ref="exporter">
          <h2>Export Data</h2>
          <div className="ui grid">
            <div className="two column row">
              <div className="column available">
                <h3>Available Fields</h3>
                <ul ref="available">
                  {_.map(availableFields, (field, index) => {
                    return (
                      <li data-name={field.key}>
                        {field.label}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="column selected">
                <h3>Selected Fields</h3>
                <ul ref="selected">
                  {_.map(selectedFields, (field, index) => {
                    return (
                      <li data-name={field.key}>
                        {field.label}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="ui negative button" onClick={this.props.onCancel}>Cancel</div>
          <div className="ui positive dropdown button" ref="export_dropdown">
            Export As... <i className="dropdown icon"/>
            <div className="menu">
              <div className="item" data-value="excel"><i className="file excel outline icon"/> Excel Spreadsheet</div>
              <div className="item" data-value="csv"><i className="table icon"/> CSV</div>
              <div className="item" data-value="tsv"><i className="table icon"/> TSV</div>
            </div>
          </div>
        </div>
      </PlainWindow>
    )
  }

  getFields() {
    return $(this.refs.selected)
      .find('li')
      .map((index, element) => {
        return $(element).data('name')
      })
      .toArray()
      .join(',')
  }

  exportXls() {
    window.location = `${this.props.exportUrl}.xlsx?fields=${this.getFields()}`
    if(this.props.autoClose) this.props.onCancel()
  }

  exportCsv() {
    window.location = `${this.props.exportUrl}.csv?fields=${this.getFields()}`
    if(this.props.autoClose) this.props.onCancel()
  }

  exportTsv() {
    window.location = `${this.props.exportUrl}.tsv?fields=${this.getFields()}`
    if(this.props.autoClose) this.props.onCancel()
  }

  componentDidMount() {
    $(this.refs.exporter).find('ul').sortable({ connectWith: '.ui-sortable', items: 'li', containment: $('.grid') }).disableSelection()
    $(this.refs.export_dropdown).dropdown({
      action: (text, val) => {
        switch (val) {
          case 'excel':
            this.exportXls()
            break
          case 'csv':
            this.exportCsv()
            break
          case 'tsv':
            this.exportTsv()
            break
        }
      }
    })
  }

  componentWillUnmount() {
    $(this.refs.field_selector).find('.checkbox').checkbox('destroy')
    $(this.refs.export_dropdown).dropdown('destroy')
  }
}
