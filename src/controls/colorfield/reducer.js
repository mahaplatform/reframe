// @flow

import type { Set, Action, State } from './types'

const INITIAL_STATE: State = {
  color: null
}

const set = (state: State, action: Set): State => ({
  color: action.color
})

const reducer = (state: State = INITIAL_STATE, action: Action): State => {

  switch (action.type) {

  case 'SET':
    return set(state, action)

  default:
    return state
  }

}

export default reducer
