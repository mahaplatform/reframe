// @flow

import type { Choose, State, Action } from './types'

export const INITIAL_STATE: State = {
  chosen: null
}

const choose = (state: State, action: Choose): State => ({
  ...state,
  chosen: action.index
})

const reducer = (state: State = INITIAL_STATE, action: Action): State => {

  switch (action.type) {

  case 'CHOOSE':
    return choose(state, action)

  default:
    return state
  }

}

export default reducer
