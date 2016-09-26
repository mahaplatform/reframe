import React from 'react'
import Field from './field'

class Fields extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
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
    const { id, fields, onChange, onUpdateData } = this.props
    const numbers = ['zero','one','two','three','four','five','six']
    return (
      <div className={`${numbers[fields.length]} fields`}>
        {fields.map((field, index) => {
          return <Field {...field}
                        id={id}
                        key={`field_${index}`}
                        onChange={onChange}
                        onUpdateData={onUpdateData} />
        })}
      </div>
    )
  }

}

export default Fields
