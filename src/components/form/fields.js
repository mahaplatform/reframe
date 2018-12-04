import React from 'react'
import PropTypes from 'prop-types'
import Field from './field'

class Fields extends React.Component {

  static propTypes = {
    fields: PropTypes.array,
    onBusy: PropTypes.func,
    onReady: PropTypes.func,
    onUpdateData: PropTypes.func
  }

  static defaultProps = {
    fields: [],
    onBusy: () => {},
    onReady: () => {},
    onUpdateData: () => {}
  }

  render() {
    const { fields } = this.props
    const numbers = ['zero','one','two','three','four','five','six']
    return (
      <div className={`${numbers[fields.length]} fields`}>
        {fields.map((field, index) => {
          return <Field key={`field_${index}`} { ...this._getField(field) } />
        })}
      </div>
    )
  }

  componentDidMount() {
    this.props.onReady()
  }

  _getField(field) {
    const { onBusy, onReady, onUpdateData } = this.props
    return {
      ...field,
      onBusy,
      onReady,
      onUpdateData
    }

  }

}

export default Fields
