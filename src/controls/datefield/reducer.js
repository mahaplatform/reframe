const INITIAL_VALUE = {
  active: false,
  value: null,
  month: null,
  year: null
}

const setCurrent = (state, action) => ({
  ...state,
  month: action.month,
  year: action.year
})

const setValue = (state, action) => ({
  ...state,
  value: action.value
})

const previous = (state, action) => ({
  ...state,
  month: state.month !== null ? (state.month === 0 ? 11 : state.month - 1) : null,
  year: state.year !== null ? (state.month === 0 ? state.year - 1 : state.year) : null
})

const next = (state, action) => ({
  ...state,
  month: state.month !== null ? (state.month === 11 ? 0 : state.month + 1) : null,
  year: state.year !== null ? (state.month === 11 ? state.year + 1 : state.year) : null
})

const begin = (state, action) => ({
  ...state,
  active: true
})

const cancel = (state, action) => ({
  ...state,
  active: false
})

const choose = (state, action) => ({
  ...state,
  value: action.value,
  active: false
})

const clear = (state, action) => ({
  ...state,
  value: null
})

const reducer = (state = INITIAL_VALUE, action) => {

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
