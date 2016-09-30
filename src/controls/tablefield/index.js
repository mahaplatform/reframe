import React from 'react'
import { connect } from 'react-redux'
import Component from '../../component'
import TableField from './components/tablefield'

class Index extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    columns: React.PropTypes.array,
    defaultValue: React.PropTypes.array,
    onChange: React.PropTypes.func
  }

  render() {
    const { id, columns, defaultValue, onChange } = this.props
    return <TableField id={id}
                       columns={columns}
                       defaultValue={defaultValue}
                       onChange={onChange} />
  }

}

export default Component('tablefield', 'id')(Index)
