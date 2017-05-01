import { expect } from 'chai'
import * as actionTypes from './action_types'
import * as actions from './actions'
import reducer from './reducer'
import component from './component'

describe('history component', () => {

  describe('actions', () => {

    it('can dispatch push', () => {

      const expected = {
        type: actionTypes.PUSH,
        pathname: '/test'
      }

      expect(actions.push('/test')).to.eql(expected)

    })

    it('can dispatch back', () => {

      const expected = {
        type: actionTypes.BACK
      }

      expect(actions.back()).to.eql(expected)

    })

    it('can dispatch reset', () => {

      const expected = {
        type: actionTypes.RESET,
        pathname: '/test'

      }

      expect(actions.reset('/test')).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        stack: []
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can push to an empty stack', () => {

      const state = {
        stack: []
      }

      const action = {
        type: actionTypes.PUSH,
        pathname: '/test'
      }

      const expected = {
        stack: ['/test']
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can push to an existing stack', () => {

      const state = {
        stack: ['/one']
      }

      const action = {
        type: actionTypes.PUSH,
        pathname: '/two'
      }

      const expected = {
        stack: ['/one','/two']
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can back from an existing stack', () => {

      const state = {
        stack: ['/one','/two']
      }

      const action = {
        type: actionTypes.BACK
      }

      const expected = {
        stack: ['/one']
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can back from an empty stack', () => {

      const state = {
        stack: []
      }

      const action = {
        type: actionTypes.BACK
      }

      const expected = {
        stack: []
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can reset the stack', () => {

      const state = {
        stack: ['/one','/two']
      }

      const action = {
        type: actionTypes.RESET,
        pathname: '/three'
      }

      const expected = {
        stack: ['/three']
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {})

})
