const INITIAL_VALUE = {
  rows: [],
  values: {}
}

export default (state = INITIAL_VALUE, action) => {

  switch (action.type) {

  case 'SET':
    return {
      ...state,
      rows: action.rows
    }

  case 'ADD':
    return {
      ...state,
      rows: [
        ...state.rows,
        action.row
      ],
      values: {}
    }

  case 'UPDATE':
    return {
      ...state,
      values: {
        ...state.values,
        [action.key]: action.value
      }
    }

  case 'REMOVE':
    return {
      ...state,
      rows: [
        ...state.rows.filter((row, index) => index !== action.index)
      ]
    }

  case 'REORDER':
    return {
      ...state,
      rows: (action.from < action.to) ? [
        ...state.rows.slice(0, action.from),
        ...state.rows.slice(action.from + 1, action.to + 1),
        state.rows[action.from],
        ...state.rows.slice(action.to + 1)
      ] : [
        ...state.rows.slice(0, action.to),
        state.rows[action.from],
        ...state.rows.slice(action.to, action.from),
        ...state.rows.slice(action.from + 1)
      ]
    }

  default:
    return state

  }

}
