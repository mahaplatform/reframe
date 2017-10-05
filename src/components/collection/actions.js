// @flow

import type { Column, SetParams, Sort, Filter, SetRecords, SetFilter, SetQuery, ToggleTasks, AddPanel, RemovePanel, ClearPanel, SetColumns } from './types'
import { Component } from '../../types'

export const setParams = (filter: Object, sort: Object): SetParams => ({
  type: 'SET_PARAMS',
  filter,
  sort
})

export const setColumns = (columns: Array<Column>): SetColumns => ({
  type: 'SET_COLUMNS',
  columns
})

export const sort = (key: string): Sort => ({
  type: 'SORT',
  key
})

export const filter = (filter: Object): Filter => ({
  type: 'FILTER',
  filter
})

export const setRecords = (records: Array<Object>): SetRecords => ({
  type: 'SET_RECORDS',
  records
})

export const setFilter = (filter: Object): SetFilter => ({
  type: 'SET_FILTER',
  filter
})

export const setQuery = (q: string): SetQuery => ({
  type: 'SET_QUERY',
  q
})

export const toggleTasks = (): ToggleTasks => ({
  type: 'TOGGLE_TASKS'
})

export const addPanel = (panel: Component): AddPanel => ({
  type: 'ADD_PANEL',
  panel
})

export const removePanel = (panel: Component): RemovePanel => ({
  type: 'REMOVE_PANEL'
})

export const clearPanel = (panel: Component): ClearPanel => ({
  type: 'CLEAR_PANEL'
})
