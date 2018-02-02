const INITIAL_STATE = {
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

const setParams = (state, action) => ({
  ...state,
  filter: action.filter,
  sort: action.sort
})

const setColumns = (state, action) => ({
  ...state,
  columns: action.columns
})

const setSelected = (state, action) => ({
  ...state,
  selected: action.selected
})

const filter = (state, action) => ({
  ...state,
  filter: action.filter
})

const sort = (state, action) => ({
  ...state,
  sort: {
    key: action.key,
    order: (state.sort.key == action.key && state.sort.order == 'asc') ? 'desc' : 'asc'
  }
})

const setRecords = (state, action) => ({
  ...state,
  records: action.records
})

const setFilter = (state, action) => ({
  ...state,
  filter: action.filter
})

const setQuery = (state, action) => ({
  ...state,
  q: action.q
})

const toggleTasks = (state, action) => ({
  ...state,
  managing: !state.managing
})

const addPanel = (state, action) => ({
  ...state,
  open: true,
  panel: action.panel
})

const removePanel = (state, action) => ({
  ...state,
  open: false
})

const clearPanel = (state, action) => ({
  ...state,
  panel: null
})

const reducer = (state = INITIAL_STATE, action)=> {

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
