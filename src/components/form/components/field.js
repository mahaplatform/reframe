import React from 'react'
import Fields from './fields'
import Control from '../../../controls/control'

class Field extends React.Component {

  static propTypes = {
    code: React.PropTypes.string,
    include: React.PropTypes.bool,
    show: React.PropTypes.bool,
    label: React.PropTypes.string,
    instructions: React.PropTypes.string,
    required: React.PropTypes.bool,
    columns: React.PropTypes.array,
    options: React.PropTypes.array,
    data: React.PropTypes.object,
    fields: React.PropTypes.array,
    errors: React.PropTypes.object,
    onUpdateData: React.PropTypes.func
  }

  static defaultProps = {
    code: null,
    include: true,
    show: true,
    label: null,
    instructions: null,
    required: false,
    columns: [],
    options: [],
    data: {},
    fields: [],
    onUpdateData: () => {}
  }

  render() {
    const { code, type, include, show, label, style, instructions, required, datasource, columns, options, data, errors, fields, onUpdateData } = this.props
    const error = (errors[code]) ? errors[code][0] : null
    let classes = ['field']
    if(error) {
      classes.push('error')
    }
    if(required) {
      classes.push('required')
    }
    if(include && show) {
      return (
        <div className={classes.join(' ')}>
          {(label) ? <label>{label}</label> : null}
          {(instructions) ? <div className="instructions">{instructions}</div> : null}
          {(() => {
            if(type == 'fields') {
              return <Fields fields={fields}
                             onChange={this._handleUpdateData.bind(this)}
                             onUpdateData={onUpdateData} />
            } else  {
              const value = data[code]
              return <Control type={type}
                              label={label}
                              style={style}
                              datasource={datasource}
                              columns={columns}
                              options={options}
                              defaultValue={value}
                              onChange={this._handleUpdateData.bind(this)} />
            }
          })()}
          {(error) ? <div className="ui pointing red basic label">{error}</div> : null}
        </div>
      )
    } else {
      return null
    }
  }

  _handleUpdateData(value) {
    const { code, onUpdateData } = this.props
    onUpdateData(code, value)
  }

}

export default Field
