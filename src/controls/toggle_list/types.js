// @flow

import { Component } from '../../types'

export type Ids = Array<number>

export type Set = {
  type: 'SET',
  ids: Ids
}

export type Toggle = {
  type: 'TOGGLE',
  id: number
}

export type Action =
  | Set
  | Toggle

export type State = {
  +chosen: Ids
}

export type Filter = Object

export type Filters = Array<Filter>

export type Props = {
  chosen: Ids,
  component: Component,
  defaultValue: Ids,
  endpoint: string,
  filters: Filters,
  sort: string,
  onChange: (value: Ids) => void,
  onSet: (value: Ids) => void,
  onToggle: (id: number) => void
}
