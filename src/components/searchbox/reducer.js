// @flow

import type { Begin, End, Type, Abort, State, Action } from './types'

export const INITIAL_STATE: State = {
  active: false,
  q: ''
}

const begin = (state: State, action: Begin): State => ({
  ...state,
  active: true
})

const end = (state: State, action: End): State => ({
  ...state,
  active: false
})

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

  case 'BEGIN':
    return begin(state, action)

  case 'END':
    return end(state, action)

  case 'TYPE':
    return type(state, action)

  case 'ABORT':
    return abort(state, action)

  default:
    return state
  }

}

export default reducer
