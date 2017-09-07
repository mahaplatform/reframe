import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actionTypes from './action_types'
import * as actions from './actions'
import reducer from './reducer'
import Tasks from './tasks'

describe('tasks component', () => {

  describe('actions', () => {

    it('can dispatch open', () => {

      const expected = {
        type: actionTypes.OPEN,
        items: []
      }

      expect(actions.open([])).to.eql(expected)

    })

    it('can dispatch close', () => {

      const expected = {
        type: actionTypes.CLOSE
      }

      expect(actions.close()).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        error: null,
        items: null,
        open: false,
        status: 'pending'
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can open tasks', () => {

      const state = {
        tasks: null
      }

      const action = {
        type: actionTypes.OPEN,
        items:[
          { foo: '1' },
          { bar: '2' },
          { baz: '3' }
        ]
      }

      const expected = {
        items: [
          { foo: '1' },
          { bar: '2' },
          { baz: '3' }
        ],
        open: true
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can close tasks', () => {

      const state = {
        items: [
          { foo: '1' },
          { bar: '2' },
          { baz: '3' }
        ]
      }

      const action = {
        type: actionTypes.CLOSE
      }

      const expected = {
        items: [
          { foo: '1' },
          { bar: '2' },
          { baz: '3' }
        ],
        open: false
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

    })

  })

})
