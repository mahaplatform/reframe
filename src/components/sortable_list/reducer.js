const INITIAL_STATE = {
  items: []
}

const set = (state, action) => ({
  ...state,
  items: action.items
})

const toggle = (state, action) => ({
  ...state,
  items: state.items.map((item, index) => {
    if(index !== action.index) return item
    return {
      ...item,
      checked: !item.checked
    }
  })
})

const move = (state, action) => {
  return {
    ...state,
    items: (action.from < action.to) ? [
      ...state.items.slice(0, action.from),
      ...state.items.slice(action.from + 1, action.to + 1),
      state.items[action.from],
      ...state.items.slice(action.to + 1)
    ] : [
      ...state.items.slice(0, action.to),
      state.items[action.from],
      ...state.items.slice(action.to, action.from),
      ...state.items.slice(action.from + 1)
    ]
  }
}

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'SET':
    return set(state, action)

  case 'TOGGLE':
    return toggle(state, action)

  case 'MOVE':
    return move(state, action)

  default:
    return state
  }

}

export default reducer
