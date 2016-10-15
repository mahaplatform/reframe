import * as actionTypes from './action_types'
import _ from 'lodash'

export const INITIAL_STATE = {
  columns: null,
  records: null,
  layout: 'table',
  params: {
    filter: {},
    sort: {
      key: 'created_at',
      order: 'desc'
    }
  },
  expanded: false,
  exporting: false,
  selected: [],
  selectAll: false,
  status: 'initialized',
  batchAction: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.FETCH_COLUMNS_REQUEST:
    return {
      ...state,
      status: 'loading_columns'
    }

  case actionTypes.FETCH_COLUMNS_SUCCESS:
  case actionTypes.SET_COLUMNS:
    return {
      ...state,
      columns: action.columns,
      status: 'columns_loaded'
    }

  case actionTypes.FETCH_COLUMNS_FAILURE:
    return {
      ...state,
      errors: action.errors,
      status: 'columns_failed'
    }

  case actionTypes.FETCH_RECORDS_REQUEST:
    return {
      ...state,
      status: 'records_loading'
    }

  case actionTypes.FETCH_RECORDS_SUCCESS:
  case actionTypes.SET_RECORDS:
    return {
      ...state,
      records: action.records,
      status: 'records_loaded'
    }

  case actionTypes.FETCH_RECORDS_FAILURE:
    return {
      ...state,
      errors: action.errors,
      status: 'records_failed'
    }

  case actionTypes.APPEND_RECORDS:
    return {
      ...state,
      records: [...state.records, ...action.records]
    }

  case actionTypes.TOGGLE_FILTERS:
    return {
      ...state,
      expanded: !state.expanded
    }

  case actionTypes.CHANGE_LAYOUT:
    return {
      ...state,
      layout: action.layout
    }

  case actionTypes.SELECT_ALL:
    let selectAll = (!state.selectAll && state.selected.length < state.records.length)
    return {
      ...state,
      selectAll: selectAll,
      selected: (selectAll) ? _.map(state.records, function(object) { return object.id }) : []
    }

  case actionTypes.SELECT:
    var selected = (_.includes(state.selected, action.id)) ? _.without(state.selected, action.id) : [...state.selected, action.id]
    return {
      ...state,
      selectAll: (selected.length == state.records.length),
      selected: selected
    }

  case actionTypes.FILTER_RECORDS:
    return {
      ...state,
      status: 'reload_records',
      params: {
        ...state.params,
        filter: action.params
      }
    }

  case actionTypes.SORT_RECORDS:
    return {
      ...state,
      status: 'reload_records',
      params: {
        ...state.params,
        sort: {
          key: action.key,
          order: (state.params.sort.key == action.key && state.params.sort.order == 'asc') ? 'desc' : 'asc'
        }
      }
    }

  case actionTypes.EXPORT_RECORDS:
    return {
      ...state,
      exporting: true
    }

  case actionTypes.RELOAD_RECORDS:
    return {
      ...state,
      records: null,
      status: 'reload_records'
    }

  case actionTypes.EXECUTE_BATCH_ACTION:
    return {
      ...state,
      batchAction: action.batchAction
    }

  default:
    return state

  }

}
