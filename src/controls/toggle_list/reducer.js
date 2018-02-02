import _ from 'lodash'

export const INITIAL_STATE = {
  filtering: false,
  filter: {},
  query: '',
  chosen: []
}

const loadSuccess = (state, action) => ({
  ...state,
  chosen: action.result.data
})

const setChosen = (state, action) => ({
  ...state,
  chosen: action.chosen
})

const setQuery = (state, action) => ({
  ...state,
  query: action.query
})

const setFilter = (state, action) => ({
  ...state,
  filter: action.filter
})

const toggleFilter = (state, action) => ({
  ...state,
  filtering: !state.filtering
})

const toggleRecord = (state, action) => {

  const getChosen = () => {
    if(!action.multiple) return [action.record]
    if(_.find(state.chosen, { id: action.record.id }) !== undefined) {
      return state.chosen.filter(record => record.id !== action.record.id)
    }
    return [
      ...state.chosen,
      action.record
    ]
  }

  return {
    ...state,
    chosen: getChosen()
  }

}

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'LOAD_SUCCESS':
    return loadSuccess(state, action)

  case 'SET_CHOSEN':
    return setChosen(state, action)

  case 'SET_QUERY':
    return setQuery(state, action)

  case 'SET_FILTER':
    return setFilter(state, action)

  case 'TOGGLE_FILTER':
    return toggleFilter(state, action)

  case 'TOGGLE_RECORD':
    return toggleRecord(state, action)

  default:
    return state
  }

}

export default reducer
