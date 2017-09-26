// @flow

import type { Open, Close, Clear, Action, State } from './types'

const INITIAL_STATE: State = {
  message: null,
  options: null,
  open: false
}

const open = (state: State, action: Open): State => ({
  message: action.message,
  options: action.options,
  open: true
})

const close = (state: State, action: Close): State => ({
  ...state,
  open: false
})

const clear = (state: State, action: Clear): State => ({
  ...INITIAL_STATE
})

const reducer = (state: State = INITIAL_STATE, action: Action): State => {

  switch (action.type) {

  case 'OPEN':
    return open(state, action)

  case 'CLOSE':
    return close(state, action)

  case 'CLEAR':
    return clear(state, action)

  default:
    return state
  }

}

export default reducer
