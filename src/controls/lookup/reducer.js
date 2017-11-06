const INITIAL_VALUE = {
  active: false,
  q: null,
  chosen: null,
  status: 'ready',
  adding: false
}

export default (state = INITIAL_VALUE, action) => {

  switch (action.type) {

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

  case 'CLEAR':
    return {
      ...state,
      chosen: null
    }

  case 'CANCEL':
    return {
      ...state,
      active: false
    }

  case 'CHOOSE':
    return {
      ...state,
      active: false,
      chosen: action.chosen
    }

  case 'QUERY':
    return {
      ...state,
      q: action.q
    }

  case 'LOAD_SUCCESS':
    return {
      ...state,
      chosen: action.result.data[0],
      status: 'success'
    }

  case 'SHOW_FORM':
    return {
      ...state,
      adding: true
    }

  case 'HIDE_FORM':
    return {
      ...state,
      active: false,
      adding: false
    }
  default:
    return state

  }

}
