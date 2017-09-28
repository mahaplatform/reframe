// @flow

import type { Set, Clear, Action, State } from './types'

const INITIAL_STATE: State = {
  message: null,
  style: null
}

export default (state: State = INITIAL_STATE, action: Action) => {

  switch (action.type) {

  case 'SET':
    return set(state, action)

  case 'CLEAR':
    return clear(state, action)

  default:
    return state
  }

}

const set = (state: State, action: Set): State => ({
  style: action.style,
  message: action.message
})


const clear = (state: State, action: Clear): State => INITIAL_STATE
