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

export type ToggleTasks = {
  type: 'TOGGLE_TASKS'
}

export type AddPanel = {
  type: 'ADD_PANEL',
  panel: Component
}

export type RemovePanel = {
  type: 'REMOVE_PANEL'
}

export type ClearPanel = {
  type: 'CLEAR_PANEL'
}

export type Actions =
 | SetParams
 | Sort
 | Filter
 | SetRecords
 | SetFilter
 | SetQuery
 | ToggleTasks
 | AddPanel
 | RemovePanel
 | ClearPanel

export type State = {
  +filter: Object,
  +managing: boolean,
  +open: boolean,
  +panel?: Component,
  +q: string,
  +records: ?Array<Object>,
  +sort: {
    +key: ?string,
    +order: ?string
  },
}

export type Props = {
  endpoint?: string,
  filters?: Array<Object>,
  layout: Component,
  managing?: boolean,
  open?: boolean,
  panel?: Component,
  sort: string,
  tasks?: Array<Object>
}
