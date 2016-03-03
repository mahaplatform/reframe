import _ from 'lodash'

const defaultTableState = {
  sort: { key: 'id', order: 'asc' },
  columnVisibility: {},
  columnChooserVisible: false,
  exporterVisible: false
}

Object.freeze(defaultTableState);

const handlers = {

  SET_SORT(state, action) {
    return {
      sort: {
        key: action.key,
        order: action.order
      },
      ...state
    }
  },

  REVERSE_SORT(state, action) {
    return {
      sort: {
        order: action.order === 'asc' ? 'desc' : 'asc',
        ...state.sort
      },
      ...state
    }
  },

  SHOW_EXPORTER(state, action) {
    return {
      exporterVisible: true,
      ...state
    }
  },

  HIDE_EXPORTER(state, action) {
    return {
      exporterVisible: false,
      ...state
    }
  },

  SHOW_COLUMN_CHOOSER(state, action) {
    return {
      columnChooserVisible: true,
      ...state
    }
  },

  HIDE_COLUMN_CHOOSER(state, action) {
    return {
      columnChooserVisible: false,
      ...state
    }
  },

  SHOW_COLUMN(state, action) {
    return {
      columnVisibility: {
        [action.key]: true,
        ...state.columnVisibility
      },
      ...state
    }
  },

  HIDE_COLUMN(state, action) {
    return {
      columnVisibility: {
        [action.key]: false,
        ...state.columnVisibility
      },
      ...state
    }
  }

}

export default function (state = defaultTableState, action) {
  return _.get(handlers, action.type, _.constant(state))(state, action)
}