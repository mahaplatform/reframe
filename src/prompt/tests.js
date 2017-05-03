import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actionTypes from './action_types'
import * as actions from './actions'
import reducer from './reducer'
import Prompt from './prompt'

describe('prompt component', () => {

  const message = 'Are you sure?'

  const options = [
    { label: 'Yes', handler: () => {} },
    { label: 'No', handler: () => {} }
  ]

  describe('actions', () => {

    it('can dispatch open', () => {

      const expected = {
        type: actionTypes.OPEN,
        message,
        options
      }

      expect(actions.open(message, options)).to.eql(expected)

    })

    it('can dispatch clear', () => {

      const expected = {
        type: actionTypes.CLOSE
      }

      expect(actions.close()).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        message: null,
        options: null
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can open prompt', () => {

      const state = {
        message: null,
        options: null
      }

      const action = {
        type: actionTypes.OPEN,
        message,
        options
      }

      const expected = {
        message,
        options
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can close prompt', () => {

      const state = {
        message,
        options
      }

      const action = {
        type: actionTypes.CLOSE
      }

      const expected = {
        message: null,
        options: null
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

    })

  })

})
