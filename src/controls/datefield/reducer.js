// @flow

import type { SetValue, SetCurrent, Previous, Next, Begin, Cancel, Choose, Clear, Action, State } from './types'

const INITIAL_VALUE: State = {
  active: false,
  value: null,
  month: null,
  year: null
}

const setCurrent = (state: State, action: SetCurrent): State => ({
  ...state,
  month: action.month,
  year: action.year
})

const setValue = (state: State, action: SetValue): State => ({
  ...state,
  value: action.value
})

const previous = (state: State, action: Previous): State => ({
  ...state,
  month: state.month !== null ? (state.month === 0 ? 11 : state.month - 1) : null,
  year: state.year !== null ? (state.month === 0 ? state.year - 1 : state.year) : null
})

const next = (state: State, action: Next): State => ({
  ...state,
  month: state.month !== null ? (state.month === 11 ? 0 : state.month + 1) : null,
  year: state.year !== null ? (state.month === 11 ? state.year + 1 : state.year) : null
})

const begin = (state: State, action: Begin): State => ({
  ...state,
  active: true
})

const cancel = (state: State, action: Cancel): State => ({
  ...state,
  active: false
})

const choose = (state: State, action: Choose): State => ({
  ...state,
  value: action.value,
  active: false
})

const clear = (state: State, action: Clear): State => ({
  ...state,
  value: null
})

const reducer = (state: State = INITIAL_VALUE, action: Action): State => {

  switch (action.type) {

  case 'SET_CURRENT':
    return setCurrent(state, action)

  case 'SET_VALUE':
    return setValue(state, action)

  case 'PREVIOUS':
    return previous(state, action)

  case 'NEXT':
    return next(state, action)

  case 'BEGIN':
    return begin(state, action)

  case 'CANCEL':
    return cancel(state, action)

  case 'CHOOSE':
    return choose(state, action)

  case 'CLEAR':
    return clear(state, action)

  default:
    return state

  }

}

export default reducer
