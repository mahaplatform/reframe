const INITIAL_STATE = {
  q: ''
}

const query = (state, action) => ({
  ...state,
  q: action.q
})

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'QUERY':
    return query(state, action)

  default:
    return state
  }

}

export default reducer
