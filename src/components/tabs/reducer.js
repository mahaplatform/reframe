export const INITIAL_STATE = {
  chosen: null
}

const choose = (state, action) => ({
  ...state,
  chosen: action.index
})

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'CHOOSE':
    return choose(state, action)

  default:
    return state
  }

}

export default reducer
