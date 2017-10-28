// @flow

import type { Component } from '../../types'

export type Filter = Object

export type Page = {
  skip: ?number
}

export type Sort = {
  key: string,
  order: 'asc' | 'desc'
}

export type Query = {
  $page: ?Page,
  $filter: ?Filter,
  $sort: string
}

export type FetchRequest = {
  type: 'FETCH_REQUEST',
  request_id: string,

}

export type FetchFailure = {
  type: 'FETCH_FAILURE'
}

export type FetchSuccess = {
  type: 'FETCH_SUCCESS',
  result: {
    data: Array<Object>,
    meta: Object,
    pagination: Object
  }
}

export type FetchDelay = {
  type: 'FETCH_DELAY'
}

export type FetchTimeout = {
  type: 'FETCH_TIMEOUT'
}

export type Select = {
  type: 'SELECT',
  id: number
}

export type SelectAll = {
  type: 'SELECT_ALL'
}
export type Action =
  | FetchDelay
  | FetchTimeout
  | Select
  | SelectAll

export type Props = {
  all?: number,
  cacheKey?: string,
  delayed?: Component,
  empty?: Component,
  endpoint: string,
  failure?: Component,
  filter?: Filter,
  footer?: Component,
  header?: Component,
  layout?: Component,
  loading?: Component,
  notFound?: Component,
  records?: Array<Object>,
  request_id?: string,
  selected?: Array<number>,
  sort?: Sort,
  status?: string,
  timeout?: Component,
  total?: number,
  onFetch?: (endpoint: string, query: Query) => void,
  onFetchDelay?: () => void,
  onFetchTimeout?: () => void,
  onSelect?: (id: number) => void,
  onSelectAll?: () => void,
  onUpdateSelected?: (ids: Array<Object>) => void
}

export type Status = 'pending' | 'loading' | 'failed' | 'delayed' | 'timeout' | 'completed' | 'loaded'

export type State = {
  +all: ?number,
  +records: ?Array<Object>,
  +request_id: ?string,
  +selected: Array<number>,
  +status: Status,
  +total: ?number
}
