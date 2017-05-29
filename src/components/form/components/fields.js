import React from 'react'
import Field from './field'

class Fields extends React.Component {

  static propTypes = {
    fields: React.PropTypes.array,
    onChange: React.PropTypes.func,
    onUpdateData: React.PropTypes.func
  }

  static defaultProps = {
    fields: [],
    onChange: () => {},
    onUpdateData: () => {}
  }

  render() {
    const { fields, onChange, onUpdateData } = this.props
    const numbers = ['zero','one','two','three','four','five','six']
    return (
      <div className={`${numbers[fields.length]} fields`}>
        {fields.map((field, index) => {
          return <Field {...field}
                        key={`field_${index}`}
                        onChange={onChange}
                        onUpdateData={onUpdateData} />
        })}
      </div>
    )
  }

}

export default Fields
