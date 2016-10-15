import reducer from '../reducer'
import * as actionTypes from '../action_types'

jest.unmock('../reducer')
jest.unmock('lodash')

describe('collection reducer', () => {

  it('sets records', () => {
    let state = {
      records: []
    }
    let action = {
      type: actionTypes.SET_RECORDS,
      records: [
        { id: 1, title: 'One' }
      ]
    }
    let expected = {
      records: [
        { id: 1, title: 'One' }
      ],
      status: 'records_loaded'
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('appends records', () => {
    let state = {
      records: [
        { id: 1, title: 'One' }
      ]
    }
    let action = {
      type: actionTypes.APPEND_RECORDS,
      records: [
        { id: 2, title: 'Two'}
      ]
    }
    let expected = {
      records: [
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ]
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('toggles filter', () => {
    let state = {
      expanded: false
    }
    let action = {
      type: actionTypes.TOGGLE_FILTERS
    }
    let expected = {
      expanded: true
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('changes layout', () => {
    let state = {
      layout: 'table'
    }
    let action = {
      type: actionTypes.CHANGE_LAYOUT,
      layout: 'card'
    }
    let expected = {
      layout: 'card'
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('selects all records if at least one record is deselected', () => {
    let state = {
      selectAll: false,
      records: [
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ],
      selected: [1]
    }
    let action = {
      type: actionTypes.SELECT_ALL
    }
    let expected = {
      selectAll: true,
      records: [
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ],
      selected: [1,2]
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('deselects all records if all records are selected', () => {
    let state = {
      selectAll: true,
      records: [
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ],
      selected: [1,2]
    }
    let action = {
      type: actionTypes.SELECT_ALL
    }
    let expected = {
      selectAll: false,
      records: [
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ],
      selected: []
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('selects a record if the record is deselected', () => {
    let state = {
      selectAll: false,
      records: [
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ],
      selected: []
    }
    let action = {
      type: actionTypes.SELECT,
      id: 1
    }
    let expected = {
      selectAll: false,
      records: [
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ],
      selected: [1]
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('deselects a record if the record is selected', () => {
    let state = {
      selectAll: false,
      records: [
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ],
      selected: [1]
    }
    let action = {
      type: actionTypes.SELECT,
      id: 1
    }
    let expected = {
      selectAll: false,
      records: [
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ],
      selected: []
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('sets selectAll to true if all records are selected', () => {
    let state = {
      selectAll: false,
      records: [
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ],
      selected: [1]
    }
    let action = {
      type: actionTypes.SELECT,
      id: 2
    }
    let expected = {
      selectAll: true,
      records: [
        { id: 1, title: 'One' },
        { id: 2, title: 'Two' }
      ],
      selected: [1,2]
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('sets the sort order to a new column ascending', () => {
    let state = {
      status: 'loaded',
      params: {
        filter: {},
        sort: {
          key: 'created_at',
          order: 'desc'
        }
      }
    }
    let action = {
      type: actionTypes.SORT_RECORDS,
      key: 'name'
    }
    let expected = {
      status: 'reload_records',
      params: {
        filter: {},
        sort: {
          key: 'name',
          order: 'asc'
        }
      }
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('toggles the sort order to a column from ascending to descending', () => {
    let state = {
      status: 'loaded',
      params: {
        filter: {},
        sort: {
          key: 'created_at',
          order: 'asc'
        }
      }
    }
    let action = {
      type: actionTypes.SORT_RECORDS,
      key: 'created_at'
    }
    let expected = {
      status: 'reload_records',
      params: {
        filter: {},
        sort: {
          key: 'created_at',
          order: 'desc'
        }
      }
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('toggles the sort order to a column from descending to ascending', () => {
    let state = {
      status: 'loaded',
      params: {
        filter: {},
        sort: {
          key: 'created_at',
          order: 'desc'
        }
      }
    }
    let action = {
      type: actionTypes.SORT_RECORDS,
      key: 'created_at'
    }
    let expected = {
      status: 'reload_records',
      params: {
        filter: {},
        sort: {
          key: 'created_at',
          order: 'asc'
        }
      }
    }
    expect(reducer(state, action)).toEqual(expected)
  })

})
