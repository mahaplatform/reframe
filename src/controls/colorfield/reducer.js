const INITIAL_STATE = {
  color: null
}

const set = (state, action) => ({
  color: action.color
})

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'SET':
    return set(state, action)

  default:
    return state
  }

}

export default reducer
