import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actions from './actions'
import reducer from './reducer'
import Search from './search'
import Dynamic from './dynamic'
import Options from './options'

describe('search component', () => {

  describe('actions', () => {

    it('can dispatch type', () => {

      const expected = {
        type: 'QUERY',
        q: 'foo'
      }

      expect(actions.query('foo')).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        q: ''
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can query', () => {

      const state = {
        q: ''
      }

      const action = {
        type: 'QUERY',
        q: 'foo'
      }

      const expected = {
        q: 'foo'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('search component', () => {

    it('renders with a static state', () => {

      const search = shallow(<Search />)
      expect(search.is('Options')).to.be.true

    })

    it('renders with a dynamic state', () => {

      const context = {
        store: {}
      }

      const search = shallow(<Search endpoint="/a/b/c" />)
      expect(search.is('div.reframe-search')).to.be.true

      const header = search.childAt(0)
      expect(header.is('div.reframe-search-header')).to.be.true

      const body = search.childAt(1)
      expect(body.is('div.reframe-search-body')).to.be.true

    })

  })

  describe('dynamic component', () => {

    it('does not render without records', () => {

      const dynamic = shallow(<Dynamic />)
      expect(dynamic.type()).to.be.null

    })

    it('does renders options without records', () => {

      const records = [
        { id: 1, name: 'foo' }
      ]

      const dynamic = shallow(<Dynamic records={ records } />)
      expect(dynamic.is('Options')).to.be.true

    })

  })

  describe('options component', () => {

    it('does not render without records', () => {

      const dynamic = shallow(<Dynamic />)
      expect(dynamic.type()).to.be.null

    })
    
  })

})
