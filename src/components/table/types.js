// @flow

import type { Component } from '../../types'

export type Column = {
  label: string,
  key: string,
  sort?: string,
  format?: string,
  primary?: boolean,
  visible?: boolean
}

export type recordTask = Object //TODO: fill out column type

export type Sort = {
  key: string,
  order: string
}

export type Props = {
  columns: Array<Column>,
  handler: (id: number) => void,
  link: string,
  managing?: boolean,
  modal: Component,
  records: Array<Object>,
  recordTasks: Array<recordTask>,
  rowClass: (record: Object) => string,
  selectAll?: boolean,
  selected?: Array<number>,
  selectable?: boolean,
  sort: Sort,
  total: number,
  onLoadMore: () => void,
  onSelect: (id: number) => void,
  onSelectAll: () => void,
  onSort: (key: string) => void
}

export type State = {
  widths: Array<number>
}
