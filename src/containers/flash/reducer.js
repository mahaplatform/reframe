const INITIAL_STATE = {
  message: null,
  style: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'SET':
    return set(state, action)

  case 'CLEAR':
    return clear(state, action)

  default:
    return state
  }

}

const set = (state, action) => ({
  style: action.style,
  message: action.message
})


const clear = (state, action) => INITIAL_STATE
