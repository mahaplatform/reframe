import * as actionTypes from './action_types'
import _ from 'lodash'

export const INITIAL_STATE = {
  active: null,
  q: '',
  query: '',
  results: {}
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.SET:
    return {
      ...state,
      results: {
        ...state.results,
        [action.key]: action.value
      }
    }

  case actionTypes.LOAD_SUCCESS:
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

  case actionTypes.REMOVE:
    return {
      ...state,
      results: (_.isArray(state.results[action.key])) ? {
        ...state.results,
        [action.key]: [
          ...state.results[action.key].slice(0, action.index),
          ...state.results[action.key].slice(action.index + 1)
        ]
      } : _.omit(state.results, action.key)
    }

  case actionTypes.RESET_ALL:
    return {
      ...state,
      results: {}
    }

  case actionTypes.RESET:
    return {
      ...state,
      results: _.omit(state.results, action.key)
    }

  case actionTypes.RESTART:
    return {
      ...state,
      active: null
    }

  case actionTypes.CHOOSE:
    return {
      ...state,
      active: action.index,
      query: ''
    }

  case actionTypes.BACK:
    return {
      ...state,
      q: '',
      query: '',
      active: null
    }

  case actionTypes.UPDATE:
    return {
      ...state,
      results: {
        ...state.results,
        [action.key]: action.value
      }
    }

  case actionTypes.TYPE:
    return {
      ...state,
      query: action.query
    }

  case actionTypes.LOOKUP:
    return {
      ...state,
      q: action.q
    }

  case actionTypes.ABORT:
    return {
      ...state,
      query: '',
      q: ''
    }

  default:
    return state
  }
}
