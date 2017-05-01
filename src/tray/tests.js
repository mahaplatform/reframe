import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actionTypes from './action_types'
import * as actions from './actions'
import reducer from './reducer'
import Tray from './component'

describe('tray component', () => {

  describe('actions', () => {

    it('can dispatch open', () => {

      const expected = {
        type: actionTypes.OPEN,
        component: 'foo'
      }

      expect(actions.open('foo', 'right')).to.eql(expected)

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
        component: null
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can open tray', () => {

      const state = {
        component: null
      }

      const action = {
        type: actionTypes.OPEN,
        component: 'foo'
      }

      const expected = {
        component: 'foo'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can close tray', () => {

      const state = {
        component: 'foo'
      }

      const action = {
        type: actionTypes.CLOSE
      }

      const expected = {
        component: null
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

    })

  })

})
