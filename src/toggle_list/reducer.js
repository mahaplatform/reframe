// @flow

import type { Set, Toggle, State, Action} from './types'

import _ from 'lodash'

export const INITIAL_STATE: State = {
  chosen: []
}

const set = (state: State, action: Set): State => ({
  ...state,
  chosen: action.ids
})

const toggle = (state: State, action: Toggle): State => ({
  ...state,
  chosen: _.includes(state.chosen, action.id) ? _.without(state.chosen, action.id) : [
    ...state.chosen,
    action.id
  ]
})

const reducer = (state: State = INITIAL_STATE, action: Action): State => {

  switch (action.type) {

  case 'TOGGLE':
    return toggle(state, action)

  case 'SET':
    return set(state, action)

  default:
    return state
  }

}

export default reducer
