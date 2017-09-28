// @flow

import type { Type, Abort, State, Action } from './types'

export const INITIAL_STATE: State = {
  q: ''
}

const type = (state: State, action: Type): State => ({
  ...state,
  q: action.q
})

const abort = (state: State, action: Abort): State => ({
  ...state,
  q: ''
})

const reducer = (state: State = INITIAL_STATE, action: Action): State => {

  switch (action.type) {

  case 'TYPE':
    return type(state, action)

  case 'ABORT':
    return abort(state, action)

  default:
    return state
  }

}

export default reducer
