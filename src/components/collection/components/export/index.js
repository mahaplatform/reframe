import React from 'react'

class Export extends React.Component {

  static propTypes = {
  }

  static defaultProps = {
    onCancel: () => {}
  }


  render() {
    let availableFields = [{key:'one',label:'One'},{key:'two',label:'Two'}]
    let selectedFields = [{key:'three',label:'Three'},{key:'four',label:'Four'}]
    return (
      <div className="modal">
        <div className="ui dimmer modals page transition visible active">
          <div className="ui standard modal media transition visible active scrolling">
            <div className="header">
              Export Data
            </div>
            <div className="content" ref="exporter">
              <div className="ui grid">
                <div className="two column row">
                  <div className="column available">
                    <h3>Available Fields</h3>
                    <ul ref="available">
                      {availableFields.map((field, index) => {
                        return (
                          <li key={`available_${index}`} data-name={field.key}>
                            {field.label}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className="column selected">
                    <h3>Selected Fields</h3>
                    <ul ref="selected">
                      {selectedFields.map((field, index) => {
                        return (
                          <li key={`selected_${index}`} data-name={field.key}>
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
              <div className="ui positive dropdown button" ref="format">
                Export As... <i className="dropdown icon"/>
                <div className="menu">
                  <div className="item" data-value="excel"><i className="file excel outline icon"/> Excel Spreadsheet</div>
                  <div className="item" data-value="csv"><i className="table icon"/> CSV</div>
                  <div className="item" data-value="tsv"><i className="table icon"/> TSV</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.format).dropdown({
      action: this._handleExport.bind(this)
    })
  }

  _handleExport(text, format) {
    if(format == 'excel') {
      this._handleXls()
    } else if(format == 'csv') {
      this._handleCsv()
    } else if(format == 'tsv') {
      this._handleTsv()
    }
  }

  _handleXls() {
    console.log('xls')
  }

  _handleCsv() {
    console.log('csv')
  }

  _handleTsv() {
    console.log('tsv')
  }

}

export default Export
