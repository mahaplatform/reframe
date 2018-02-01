// @flow

import type { Component } from '../../types'
import type { Filters } from '../../components/filters/types'

export type Record = Object

export type Chosen = Array<Record>

export type Filter = Object

export type Query = string

export type LoadSuccess = {
  type: 'LOAD_SUCCESS',
  result: {
    data: Array<Object>,
    meta: Object,
    pagination: Object
  }
}

export type SetChosen = {
  type: 'SET_CHOSEN',
  chosen: Chosen
}

export type SetFilter= {
  type: 'SET_FILTER',
  filter: Filter
}

export type SetQuery = {
  type: 'SET_QUERY',
  query: Query
}

export type ToggleFilter = {
  type: 'TOGGLE_FILTER'
}

export type ToggleRecord = {
  type: 'TOGGLE_RECORD',
  multiple: boolean,
  record: Record
}

export type Action =
  | SetChosen
  | SetFilter
  | SetQuery
  | ToggleFilter
  | ToggleRecord

export type State = {
  +filtering: boolean,
  +filter: Filter,
  +chosen: Chosen,
  +query: Query
}

export type Props = {
  chosen?: Chosen,
  defaultValue: Chosen,
  defaultFilters: Object,
  endpoint: string,
  exclude_ids: Array<number>,
  filtering?: boolean,
  filters: Filters,
  filter?: Filter,
  format: Component,
  multiple: boolean,
  query?: Query,
  sort?: string,
  text?: string,
  value?: string,
  onChange?: (value: Chosen) => void,
  onLoad?: (endpoint: string, query: Object) => void,
  onReady?: () => void,
  onSetChosen?: (chosen: Chosen) => void,
  onSetQuery?: (query: Query) => void,
  onSetFilter?: (value: Filter) => void,
  onToggleFilter?: () => void,
  onToggleRecord?: (id: number) => void
}
