import _ from 'lodash'

export const INITIAL_STATE = {
  active: null,
  q: '',
  results: {}
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'SET':
    return {
      ...state,
      results: {
        ...state.results,
        [action.key]: action.value
      }
    }

  case 'LOAD_SUCCESS':
    return {
      ...state,
      results: {
        ...state.results,
        [action.key]: action.result.data.records.map(record => {
          return {
            key: _.get(record, action.value),
            value: _.get(record, action.text)
          }
        })
      }
    }

  case 'REMOVE':
    return {
      ...state,
      results: (_.isArray(state.results[action.key]) && state.results[action.key].length > 1) ? {
        ...state.results,
        [action.key]: [
          ...state.results[action.key].slice(0, action.index),
          ...state.results[action.key].slice(action.index + 1)
        ]
      } : _.omit(state.results, action.key)
    }

  case 'RESET_ALL':
    return {
      ...state,
      results: {}
    }

  case 'RESET':
    return {
      ...state,
      results: _.omit(state.results, action.key)
    }

  case 'RESTART':
    return {
      ...state,
      active: null
    }

  case 'CHOOSE':
    return {
      ...state,
      active: action.index,
      query: ''
    }

  case 'BACK':
    return {
      ...state,
      q: '',
      query: '',
      active: null
    }

  case 'UPDATE':
    return {
      ...state,
      results: {
        ...state.results,
        [action.key]: action.value
      }
    }

  case 'QUERY':
    return {
      ...state,
      q: action.q
    }

  default:
    return state
  }
}
