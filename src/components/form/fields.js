import React from 'react'
import PropTypes from 'prop-types'
import Field from './field'

class Fields extends React.Component {

  static propTypes = {
    frame: PropTypes.any,
    onBusy: PropTypes.func,
    onReady: PropTypes.func,
    onScrollTo: PropTypes.func,
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
    const { onBusy, onReady, onScrollTo, onUpdateData } = this.props
    return {
      ...field,
      onBusy,
      onReady,
      onScrollTo,
      onUpdateData
    }

  }

}

export default Fields
