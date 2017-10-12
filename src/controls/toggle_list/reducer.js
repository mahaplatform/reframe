// @flow

import type { LoadSuccess, SetChosen, SetQuery, SetFilter, ToggleFilter, ToggleRecord, State, Action} from './types'

import _ from 'lodash'

export const INITIAL_STATE: State = {
  filtering: false,
  filter: {},
  query: '',
  chosen: []
}

const loadSuccess = (state: State, action: LoadSuccess): State => ({
  ...state,
  chosen: action.result.data
})

const setChosen = (state: State, action: SetChosen): State => ({
  ...state,
  chosen: action.chosen
})

const setQuery = (state: State, action: SetQuery): State => ({
  ...state,
  query: action.query
})

const setFilter = (state: State, action: SetFilter): State => ({
  ...state,
  filter: action.filter
})

const toggleFilter = (state: State, action: ToggleFilter): State => ({
  ...state,
  filtering: !state.filtering
})

const toggleRecord = (state: State, action: ToggleRecord): State => ({
  ...state,
  chosen: _.find(state.chosen, { id: action.record.id }) ? state.chosen.filter(record => record.id !== action.record.id) : [
    ...state.chosen,
    action.record
  ]
})

const reducer = (state: State = INITIAL_STATE, action: Action): State => {

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
