export const INITIAL_STATE = {
  active: false,
  selected: [],
  status
}

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'FETCH_REQUEST':
    return {
      ...state,
      status: 'loading'
    }

  case 'FETCH_FAILURE':
    return {
      ...state,
      status: 'failure'
    }

  case 'FETCH_SUCCESS':
    return {
      ...state,
      selected: action.result.data,
      status: 'success'
    }

  case 'BEGIN':
    return {
      ...state,
      active: true
    }

  case 'END':
    return {
      ...state,
      active: false
    }

  case 'SELECT':
    return {
      ...state,
      selected: action.selected
    }

  case 'REMOVE':
    return {
      ...state,
      selected: [
        ...state.selected.slice(0, action.index),
        ...state.selected.slice(action.index + 1)
      ]
    }

  default:
    return state

  }

}

export default reducer
