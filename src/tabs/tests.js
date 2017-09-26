import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actions from './actions'
import reducer from './reducer'
import Tabs from './tabs'

describe('tabs component', () => {

  describe('actions', () => {

    it('can dispatch choose', () => {

      const expected = {
        type: 'CHOOSE',
        index: 0
      }

      expect(actions.choose(0)).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        chosen: null
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can choose tab', () => {

      const state = {}

      const action = {
        type: 'CHOOSE',
        index: 0
      }

      const expected = {
        chosen: 0
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

      const tabs = shallow(<Tabs />)
      expect(tabs.is('Scrollpane')).to.be.true

    })

    // TODO: more component tests

  })

})
