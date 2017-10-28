// @flow

import type { SetParams, Sort, Filter, SetRecords, SetFilter, SetQuery, ToggleTasks, AddPanel, RemovePanel, ClearPanel, SetColumns, SetSelected, Actions, State } from './types'

const INITIAL_STATE: State = {
  columns: [],
  filter: {},
  managing: false,
  open: false,
  panel: null,
  q: '',
  records: null,
  selected: [],
  sort: {
    key: null,
    order: null
  }
}

const setParams = (state: State, action: SetParams): State => ({
  ...state,
  filter: action.filter,
  sort: action.sort
})

const setColumns = (state: State, action: SetColumns): State => ({
  ...state,
  columns: action.columns
})

const setSelected = (state: State, action: SetSelected): State => ({
  ...state,
  selected: action.selected
})

const filter = (state: State, action: Filter): State => ({
  ...state,
  filter: action.filter
})

const sort = (state: State, action: Sort): State => ({
  ...state,
  sort: {
    key: action.key,
    order: (state.sort.key == action.key && state.sort.order == 'asc') ? 'desc' : 'asc'
  }
})

const setRecords = (state: State, action: SetRecords): State => ({
  ...state,
  records: action.records
})

const setFilter = (state: State, action: SetFilter): State => ({
  ...state,
  filter: action.filter
})

const setQuery = (state: State, action: SetQuery): State => ({
  ...state,
  q: action.q
})

const toggleTasks = (state: State, action: ToggleTasks): State => ({
  ...state,
  managing: !state.managing
})

const addPanel = (state: State, action: AddPanel): State => ({
  ...state,
  open: true,
  panel: action.panel
})

const removePanel = (state: State, action: RemovePanel): State => ({
  ...state,
  open: false
})

const clearPanel = (state: State, action: ClearPanel): State => ({
  ...state,
  panel: null
})

const reducer = (state: State = INITIAL_STATE, action: Actions): State => {

  switch (action.type) {

  case 'SET_PARAMS':
    return setParams(state, action)

  case 'SET_COLUMNS':
    return setColumns(state, action)

  case 'SET_SELECTED':
    return setSelected(state, action)

  case 'FILTER':
    return filter(state, action)

  case 'SORT':
    return sort(state, action)

  case 'SET_RECORDS':
    return setRecords(state, action)

  case 'SET_FILTER':
    return setFilter(state, action)

  case 'SET_QUERY':
    return setQuery(state, action)

  case 'TOGGLE_TASKS':
    return toggleTasks(state, action)

  case 'ADD_PANEL':
    return addPanel(state, action)

  case 'REMOVE_PANEL':
    return removePanel(state, action)

  case 'CLEAR_PANEL':
    return clearPanel(state, action)

  default:
    return state
  }

}

export default reducer
