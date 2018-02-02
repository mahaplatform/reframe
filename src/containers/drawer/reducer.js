const INITIAL_STATE = {
  component: null,
  location: null,
  open: false
}

const open = (state, action) => ({
  component: action.component,
  location: action.location,
  open: true
})

const close = (state, action) => ({
  ...state,
  open: false
})

const clear = (state, action) => ({
  ...INITIAL_STATE
})

const reducer = (state = INITIAL_STATE, action) => {

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
