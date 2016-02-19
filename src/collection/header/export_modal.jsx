import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import ModalActions from 'components/modal/actions.js'
import Config from '../../../../../../config/config.js'

export default class ExportModal extends Component {

  static defaultProps = {
    onApprove: () => {},
    onCancel: () => {},
    fields: [],
    exportUrl: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      availableFields: _(props.fields).filter(function(item, index) { return !_.includes(props.visible, index) }).value(),
      selectedFields: _(props.fields).filter(function(item, index) { return _.includes(props.visible, index) }).value()
    }
  }

  render() {
    return(
      <div className="ui dimmer modals visible active page transition" onClick={this.cancel.bind(this)}>
        <div ref="modal" className="ui small modal animating transition active" key="export_modal" style={this.getStyle()} onClick={e => e.stopPropagation()}>
          <div className="header">Export Data</div>
          <div className="content">
            <div className="ui grid">
              <div className="two column row">
                <div className="column available">
                  <h3>Available Fields:</h3>
                  <ul ref="available">
                    { this.state.availableFields.map((field,index) => {
                      return (
                        <li key={`available_field_${index}`} data-name={field.key}>
                          {field.label}
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="column selected">
                  <h3>Selected Fields:</h3>
                  <ul ref="selected">
                    { this.state.selectedFields.map((field,index) => {
                      return (
                        <li key={`selected_field_${index}`} data-name={field.key}>
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
            <div className="ui negative button" onClick={this.cancel.bind(this)}>Cancel</div>
            <div className="ui positive dropdown button" ref="dropdown">
              <span className="text">Export</span>
              <i className="dropdown icon"></i>
              <div className="menu">
                <div className="item" onClick={this.exportCsv.bind(this)}>To CSV</div>
                <div className="item" onClick={this.exportTsv.bind(this)}>To TSV</div>
                <div className="item" onClick={this.exportXls.bind(this)}>To XLS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.modal).find('ul').sortable({ connectWith: '.ui-sortable', items: 'li', containment: $('.grid') }).disableSelection()
    $(this.refs.dropdown).dropdown({
      action: 'combo'
    })
  }

  getStyle() {
    return {
      marginTop: '-250px',
      height: '500px'
    }
  }

  cancel() {
    ModalActions.closeModal(this.props.subscriber)
  }

  exportCsv() {
    ModalActions.closeModal(this.props.subscriber)
    window.location = this.buildURL('csv')
  }

  exportTsv() {
    ModalActions.closeModal(this.props.subscriber)
    window.location = this.buildURL('tsv')
  }

  exportXls() {
    ModalActions.closeModal(this.props.subscriber)
    window.location = this.buildURL('xls')
  }

  cancel() {
    ModalActions.closeModal(this.props.subscriber)
  }

  buildURL(ext) {
    let selectedFields = []
    $(this.refs.selected).find('li').each(function() {
      selectedFields.push($(this).data('name'))
    })
    return `${Config.api}${this.props.exportUrl}.${ext}?fields=${selectedFields.join(',')}`;
  }

}
