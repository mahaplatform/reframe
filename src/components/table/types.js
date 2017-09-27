// @flow

import type { Component } from '../../types'

export type Column = Object //TODO: fill out column type

export type Export = Object //TODO: fill out column type

export type recordTask = Object //TODO: fill out column type

export type Sort = {
  key: string,
  order: string
}

export type Props = {
  columns: Array<Column>,
  export: Array<Export>,
  handler: (id: number) => void,
  link: string,
  modal: Component,
  records: Array<Object>,
  recordTasks: Array<recordTask>,
  sort: Sort,
  total: number,
  onLoadMore: () => void,
  onSort: (key: string) => void
}

export type State = {
  widths: Array<number>
}
