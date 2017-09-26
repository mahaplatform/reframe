// @flow

import { Component } from '../../types'

export type SetParams = {
  type: 'SET_PARAMS',
  filter: Object,
  sort: {
    key: string,
    order: string
  }
}

export type Sort = {
  type: 'SORT',
  key: string
}

export type Filter = {
  type: 'FILTER',
  filter: Object
}

export type SetRecords = {
  type: 'SET_RECORDS',
  records: Array<Object>
}

export type Actions =
 | SetParams
 | Sort
 | Filter
 | SetRecords

export type State = {
  +params: {
    +sort: {
      +key: ?string,
      +order: ?string
    },
    +filter: Object
  },
  +records: ?Array<Object>
}

export type Props = {
  endpoint: ?string,
  filters: ?Array<Object>,
  layout: Component,
  sort: string
}
