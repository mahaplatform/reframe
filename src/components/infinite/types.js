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

export type Action =
  | FetchDelay
  | FetchTimeout

export type Props = {
  all: number,
  cacheKey: string,
  delayed: Component,
  empty: Component,
  endpoint: string,
  failure: Component,
  filter: Filter,
  layout: Component,
  loading: Component,
  records: Array<Object>,
  sort: Sort,
  status: string,
  timeout: Component,
  total: number,
  onFetch: (endpoint: string, query: Query) => void,
  onFetchDelay: () => void,
  onFetchTimeout: () => void
}

export type Status = 'pending' | 'loading' | 'failed' | 'delayed' | 'timeout' | 'completed' | 'loaded'

export type State = {
  +all: ?number,
  +records: ?Array<Object>,
  +request_id: ?string,
  +status: Status,
  +total: ?number
}
