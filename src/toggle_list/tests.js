import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actions from './actions'
import reducer from './reducer'
import ToggleList from './toggle_list'

describe('toggle_list component', () => {

  describe('actions', () => {

    it('can dispatch set', () => {

      const expected = {
        type: 'SET',
        ids: [1,2,3]
      }

      expect(actions.set([1,2,3])).to.eql(expected)

    })

    it('can dispatch toggle', () => {

      const expected = {
        type: 'TOGGLE',
        id: 1
      }

      expect(actions.toggle(1)).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        chosen: []
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can set chosen', () => {

      const state = {
        chosen: []
      }

      const action = {
        type: 'SET',
        ids: [1,2,3]
      }

      const expected = {
        chosen: [1,2,3]
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can add value', () => {

      const state = {
        chosen: [1,2]
      }

      const action = {
        type: 'TOGGLE',
        id: 3
      }

      const expected = {
        chosen: [1,2,3]
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can remove value', () => {

      const state = {
        chosen: [1,2,3]
      }

      const action = {
        type: 'TOGGLE',
        id: 3
      }

      const expected = {
        chosen: [1,2]
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

      const toggle_list = shallow(<ToggleList />)
      expect(toggle_list.is('div.reframe-toggle-list')).to.be.true

    })

  })

})
