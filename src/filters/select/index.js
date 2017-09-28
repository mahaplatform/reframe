// @flow

import type { Props } from './types'

import React from 'react'
import Search from '../../components/search'

class Select extends React.Component<Props, void> {

  static defaultProps = {
    sort: {
      key: 'created_at',
      order: 'desc'
    }
  }

  render() {
    return <Search { ...this._getSearch() } />
  }

  _getSearch() {
    const { endpoint, format, label, name, multiple, options, results, sort, q, text, value, onUpdate  } = this.props
    const prompt = `Search ${label}`
    return { endpoint, format, label, name, multiple, options, prompt, results, sort, q, text, value, onUpdate }
  }

}

export default Select
