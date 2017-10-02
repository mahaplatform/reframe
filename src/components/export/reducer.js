const INITIAL_STATE = {
  items: [
    { label: 'Column 1', checked: true },
    { label: 'Column 2', checked: true },
    { label: 'Column 3', checked: true },
    { label: 'Column 4', checked: true },
    { label: 'Column 5', checked: false },
    { label: 'Column 6', checked: true },
    { label: 'Column 7', checked: true }
  ]
}

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

  case 'TOGGLE':
    return toggle(state, action)

  case 'MOVE':
    return move(state, action)

  default:
    return state
  }

}

export default reducer
