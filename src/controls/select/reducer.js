import _ from 'lodash'

const INITIAL_VALUE = {
  items: [],
  selected: [],
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
      selected: action.values
    }

  case 'CHOOSE':
    return {
      ...state,
      selected: _.includes(state.selected, action.value) ?
        (action.multiple ? _.without(state.selected, action.value) : [ ...state.selected ]) :
        (action.multiple ? [ ...state.selected, action.value ] : [action.value])

    }

  default:
    return state

  }

}
