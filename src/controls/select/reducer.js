const INITIAL_VALUE = {
  selected: null
}

export default (state = INITIAL_VALUE, action) => {

  switch (action.type) {

  case 'SET':
    return {
      ...state,
      selected: action.value
    }

  case 'CHOOSE':
    return {
      ...state,
      selected: action.value
    }

  default:
    return state

  }

}
