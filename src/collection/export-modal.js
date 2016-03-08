import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import {PlainWindow} from '../modal/window'

export default class ExportModal extends React.Component {
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
    return (
      <PlainWindow {...modalOptions}>
        <div className="content">
          <h2>Select Fields to Export</h2>
          <div ref="field_selector" className="ui two column grid form">
            <div className="column">
              {_.map(colA, (field, index) => {
                return (
                  <div className="inline field">
                    <div className="ui checkbox">
                      <input type="checkbox" tabIndex={index} className="hidden" defaultChecked={true}/>
                      <label>{field.label}</label>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="column">
              {_.map(colB, (field, index) => {
                return (
                  <div className="inline field">
                    <div className="ui checkbox">
                      <input type="checkbox" tabIndex={index} className="hidden" defaultChecked={true}/>
                      <label>{field.label}</label>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="ui negative button">Cancel</div>
          <div className="ui positive dropdown button" ref="export_dropdown">
            Export As... <i className="dropdown icon"/>
            <div className="menu">
              <div className="item"><i className="file excel outline icon"/> Excel Spreadsheet</div>
              <div className="item"><i className="table icon"/> CSV</div>
              <div className="item"><i className="table icon"/> TSV</div>
            </div>
          </div>
        </div>
      </PlainWindow>
    )
  }

  componentDidMount() {
    $(this.refs.field_selector).find('.checkbox').checkbox()
    $(this.refs.export_dropdown).dropdown()
  }

  componentWillUnmount() {
    $(this.refs.field_selector).find('.checkbox').checkbox('destroy')
    $(this.refs.export_dropdown).dropdown('destroy')
  }
}