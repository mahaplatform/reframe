// @flow

import type { DynamicProps as Props, OptionsProps, Option } from './types'
import type { Node } from '../../types'

import React from 'react'
import Options from './options'
import _ from 'lodash'

class Dynamic extends React.Component<Props, void> {

  render(): Node {
    return (this.props.records) ? <Options { ...this._getOptions() } /> : null
  }

  _getOptions(): OptionsProps {
    const { format, multiple, name, records, results, status, onUpdate } = this.props
    const options = records.map(this._getOption.bind(this))
    return { name, format, multiple, options, results, status, onUpdate }
  }

  _getOption(record: any): Option {
    const { text, value } = this.props
    return {
      value: _.get(record, value),
      text: _.get(record, text),
      record
    }
  }

}

export default Dynamic
