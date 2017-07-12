import React from 'react'
import _ from 'lodash'
import Searchbox from '../searchbox'
import Infinite from '../infinite'
import Form from '../form'
import Format from '../format'

class Options extends React.Component {

  render() {
    const { format, options, selected } = this.props
    return (
      <div className="reframe-lookup-panel-results">
        { options.map((option, index) => (
          <div key={`result_${index}`} className="reframe-lookup-panel-result" onClick={ this._handleChoose.bind(this, option.record) }>
            <div className="reframe-lookup-panel-result-label">
              <Format { ...option.record } format={ format } value={ option.text } />
            </div>
            <div className="reframe-lookup-panel-result-icon">
              { index === selected ? <i className="green check icon" /> : null }
            </div>
          </div>
        ))}
      </div>
    )
  }

  _handleChoose(chosen) {
    this.props.onChoose(chosen)
    this.props.onChange(chosen.value)
  }

}

class Dynamic extends React.Component {

  render() {
    const { records } = this.props
    return (records) ? <Options { ...this._getOptions() } /> : null
  }

  _getOptions() {
    const { format, selected, records, value, text, onChoose, onChange } = this.props
    const options = records.map(record => ({
      value: _.get(record, value),
      text: _.get(record, text),
      record
    }))
    return {
      format,
      selected,
      options,
      onChoose,
      onChange
    }
  }

}

class Container extends React.Component {

  render() {
    const { endpoint, label, form } = this.props
    if(endpoint) {
      return (
        <div className="reframe-lookup-panel">
          <div className="reframe-lookup-panel-search">
            <Searchbox { ...this._getSearchbox() } />
          </div>
          <Infinite { ...this._getInfinite() } />
          { form &&
            <div className="reframe-lookup-panel-add">
              <div className="ui fluid blue button" onClick={ this._handleAdd.bind(this)}>
                Add {label}
              </div>
            </div>
          }
        </div>
      )
    } else {
      return (
        <div className="reframe-lookup-panel">
          <Options { ...this.props } />
        </div>
      )
    }
  }

  componentDidMount() {
    const { sort, endpoint, onLookup } = this.props
  }

  _getSearchbox() {
    const { label, onQuery } = this.props
    return {
      prompt: `Find a ${label}`,
      onChange: onQuery
    }
  }

  _getInfinite() {
    const { endpoint, q, sort } = this.props
    return {
      endpoint,
      filter: { q },
      layout: (props) => <Dynamic { ...this.props } { ...props } />,
      sort
    }
  }

  _handleAdd() {
    this.context.modal.open(<Form { ...this._getForm() } />)
  }

  _getForm() {
    return {
      ...this.props.form,
      onCancel: this.context.modal.close,
      onSuccess: (chosen) => {
        const value = _.get(chosen, this.props.value)
        this.props.onChoose(0)
        this.props.onChange(value)
        this.context.modal.close()
      }
    }

  }

}

export default Container
