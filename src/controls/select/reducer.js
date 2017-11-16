const INITIAL_VALUE = {
  items: [],
  selected: null,
  status: 'pending'
}

export default (state = INITIAL_VALUE, action) => {

  switch (action.type) {

  case 'SET_ITEMS':
    return {
      ...state,
      items: action.items
    }

  case 'FETCH_ITEMS_REQUEST':
    return {
      ...state,
      status: 'loading'
    }

  case 'FETCH_ITEMS_FAILURE':
    return {
      ...state,
      status: 'success'
    }

  case 'FETCH_ITEMS_SUCCESS':
    return {
      ...state,
      items: action.result.data,
      status: 'success'
    }

  case 'SET_SELECTED':
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
