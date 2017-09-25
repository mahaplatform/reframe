import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actions from './actions'
import reducer from './reducer'
import Tasks from './tasks'

describe('tasks component', () => {

  describe('actions', () => {

    it('can dispatch open', () => {

      const expected = {
        type: 'OPEN',
        items: []
      }

      expect(actions.open([])).to.eql(expected)

    })

    it('can dispatch close', () => {

      const expected = {
        type: 'CLOSE'
      }

      expect(actions.close()).to.eql(expected)

    })

    it('can dispatch clear', () => {

      const expected = {
        type: 'CLEAR'
      }

      expect(actions.clear()).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        error: null,
        items: null,
        open: false,
        result: null,
        status: 'pending'
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can open tasks', () => {

      const state = {}

      const action = {
        type: 'OPEN',
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
        type: 'CLOSE'
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

    it('can clear tasks', () => {

      const state = {
        items: [
          { foo: '1' },
          { bar: '2' },
          { baz: '3' }
        ]
      }

      const action = {
        type: 'CLEAR'
      }

      const expected = {
        error: null,
        items: null,
        open: false,
        result: null,
        status: 'pending'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

    })

  })

})
