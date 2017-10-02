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

export type SetFilter = {
  type: 'SET_FILTER',
  filter: Object
}

export type SetQuery = {
  type: 'SET_QUERY',
  q: string
}

export type ToggleMode = {
  type: 'TOGGLE_MODE',
  mode: string
}

export type Actions =
 | SetParams
 | Sort
 | Filter
 | SetRecords
 | SetFilter
 | SetQuery
 | ToggleMode

export type State = {
  +mode: ?string,
  +sort: {
    +key: ?string,
    +order: ?string
  },
  +filter: Object,
  +q: string,
  +records: ?Array<Object>
}

export type Props = {
  endpoint: ?string,
  filters: ?Array<Object>,
  layout: Component,
  sort: string
}
