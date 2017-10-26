const INITIAL_STATE = {
  active: 0,
  total: 0
}

const setTotal = (state, action) => ({
  ...state,
  total: action.total
})

const previous = (state, action) => ({
  ...state,
  active: state.active === 0 ? state.total - 1 :  state.active - 1
})

const next = (state, action) => ({
  ...state,
  active: state.active === state.total - 1 ? 0 : state.active + 1
})

const goto = (state, action) => ({
  ...state,
  active: action.index
})


const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'SET_TOTAL':
    return setTotal(state, action)

  case 'PREVIOUS':
    return previous(state, action)

  case 'NEXT':
    return next(state, action)

  case 'GOTO':
    return goto(state, action)

  default:
    return state
  }

}

export default reducer
