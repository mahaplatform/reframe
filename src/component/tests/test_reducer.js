import Reducer from '../reducer'
import * as actionTypes from '../action_types'

jest.unmock('../reducer')
jest.unmock('lodash')

const foo = (state = {}, action) => {
  return state
}

const reducer = Reducer({ foo })

describe('component reducer with cid', () => {

  it('adds component', () => {
    let state = {}
    let action = {
      type: actionTypes.ADD_COMPONENT,
      namespace: 'foo',
      cid: 'bar'
    }
    let expected = {
      bar: {}
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('removes component with cid', () => {
    let state = {
      bar: {}
    }
    let action = {
      type: actionTypes.REMOVE_COMPONENT,
      namespace: 'foo',
      cid: 'bar'
    }
    let expected = {}
    expect(reducer(state, action)).toEqual(expected)
  })

  it('adds component without cid', () => {
    let state = {}
    let action = {
      type: actionTypes.ADD_COMPONENT,
      namespace: 'foo'
    }
    let expected = {
      foo: {}
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  it('removes component without cid', () => {
    let state = {
      foo: {}
    }
    let action = {
      type: actionTypes.REMOVE_COMPONENT,
      namespace: 'foo'
    }
    let expected = {}
    expect(reducer(state, action)).toEqual(expected)
  })

})
