// @flow

import type { ApiRequest } from '../../types'
import type { Chosen, Query, Filter, SetChosen, SetQuery, SetFilter, ToggleFilter, ToggleRecord } from './types'

export const load = (endpoint: string, query: Object): ApiRequest => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query,
  request: 'LOAD_REQUEST',
  success: 'LOAD_SUCCESS',
  failure: 'LOAD_FAILURE'
})

export const setChosen = (chosen: Chosen): SetChosen => ({
  type: 'SET_CHOSEN',
  chosen
})

export const setQuery = (query: Query): SetQuery => ({
  type: 'SET_QUERY',
  query
})

export const setFilter = (filter: Filter): SetFilter => ({
  type: 'SET_FILTER',
  filter
})

export const toggleFilter = (id: number): ToggleFilter => ({
  type: 'TOGGLE_FILTER',
  id
})

export const toggleRecord = (multiple: boolean, record: any): ToggleRecord => ({
  type: 'TOGGLE_RECORD',
  multiple,
  record
})
