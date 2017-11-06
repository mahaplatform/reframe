const INITIAL_STATE = {
  panels: []
}

const open = (state, action) => ({
  panels: [action.component]
})

const close = (state, action) => ({
  ...state,
  panels: []
})

const pop = (state, action) => ({
  panels: state.panels.slice(0, 0 - action.num)
})

const push = (state, action) => ({
  panels: [
    ...state.panels,
    action.component
  ]
})

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'CLOSE':
    return close(state, action)

  case 'OPEN':
    return open(state, action)

  case 'POP':
    return pop(state, action)

  case 'PUSH':
    return push(state, action)

  default:
    return state
  }

}

export default reducer
