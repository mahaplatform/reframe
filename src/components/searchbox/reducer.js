export const INITIAL_STATE = {
  active: false,
  q: ''
}

const begin = (state, action) => ({
  ...state,
  active: true
})

const end = (state, action) => ({
  ...state,
  active: false
})

const type = (state, action) => ({
  ...state,
  q: action.q
})

const abort = (state, action) => ({
  ...state,
  q: ''
})

const reducer = (state = INITIAL_STATE, action: Action) => {

  switch (action.type) {

  case 'BEGIN':
    return begin(state, action)

  case 'END':
    return end(state, action)

  case 'TYPE':
    return type(state, action)

  case 'ABORT':
    return abort(state, action)

  default:
    return state
  }

}

export default reducer
