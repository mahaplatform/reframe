import React from 'react'
import Format from '../../../../utils/format'
import _ from 'lodash'

class Cell extends React.Component {

  static propTypes = {
    column: React.PropTypes.object,
    record: React.PropTypes.object
  }

  render() {
    const { column, record } = this.props
    const value = _.get(record, column.key)
    const classes = (column.primary) ? ['primary'] : []
    return (
      <td className={classes.join(' ')}>
        <Format {...record} format={column.format} value={value} />
      </td>
    )
  }

}

export default Cell
