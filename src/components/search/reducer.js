// @flow

import type { State, Action, Query } from './types'

const INITIAL_STATE: State = {
  q: ''
}

const query = (state: State, action: Query): State => ({
  ...state,
  q: action.q
})

const reducer = (state: State = INITIAL_STATE, action: Action): State => {

  switch (action.type) {

  case 'QUERY':
    return query(state, action)

  default:
    return state
  }

}

export default reducer
