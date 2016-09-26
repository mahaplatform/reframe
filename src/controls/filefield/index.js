import React from 'react'
import { connect } from 'react-redux'
import Component from '../../component'
import FileField from './components/filefield'

class Index extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    defaultValue: React.PropTypes.array,
    onChange: React.PropTypes.func
  }

  render() {
    const { id, columns, defaultValue, onChange } = this.props
    return <FileField id={id}
                       defaultValue={defaultValue}
                       onChange={onChange} />
  }

}

const validation = {
  required: []
}

export default Component(validation, 'filefield', 'id')(Index)
