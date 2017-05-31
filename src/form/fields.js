import React from 'react'
import PropTypes from 'prop-types'
import Field from './field'

class Fields extends React.Component {

  static propTypes = {
    fields: PropTypes.array,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onUpdateData: PropTypes.func
  }

  static defaultProps = {
    fields: [],
    onChange: () => {},
    onUpdateData: () => {}
  }

  render() {
    const { fields, onChange, onSubmit, onUpdateData } = this.props
    const numbers = ['zero','one','two','three','four','five','six']
    return (
      <div className={`${numbers[fields.length]} fields`}>
        {fields.map((field, index) => {
          return <Field {...field}
                        key={`field_${index}`}
                        onChange={onChange}
                        onSubmit={onSubmit}
                        onUpdateData={onUpdateData} />
        })}
      </div>
    )
  }

}

export default Fields
