import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actions from './actions'
import reducer from './reducer'
import Searchbox from './searchbox'

describe('searchbox component', () => {

  describe('actions', () => {

    it('can dispatch type', () => {

      const expected = {
        type: 'TYPE',
        q: 'foo'
      }

      expect(actions.type('foo')).to.eql(expected)

    })

    it('can dispatch abort', () => {

      const expected = {
        type: 'ABORT'
      }

      expect(actions.abort()).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        q: ''
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can type', () => {

      const state = {
        q: ''
      }

      const action = {
        type: 'TYPE',
        q: 'foo'
      }

      const expected = {
        q: 'foo'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can abort', () => {

      const state = {
        q: 'foo'
      }

      const action = {
        type: 'ABORT'
      }

      const expected = {
        q: ''
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

      const searchbox = shallow(<Searchbox />)
      expect(searchbox.is('div.reframe-searchbox')).to.be.true
      expect(searchbox.children().length).to.equal(2)

      const searchboxSearchIconWrapper = searchbox.childAt(0)
      expect(searchboxSearchIconWrapper.is('div.reframe-searchbox-icon')).to.be.true

      const searchboxSearchIcon = searchboxSearchIconWrapper.childAt(0)
      expect(searchboxSearchIcon.is('i.search.icon')).to.be.true

      const searchboxInputWrapper = searchbox.childAt(1)
      expect(searchboxInputWrapper.is('div.reframe-searchbox-input')).to.be.true

      const searchboxInput = searchboxInputWrapper.childAt(0)
      expect(searchboxInput.is('div.ui.input')).to.be.true

      const input = searchboxInput.childAt(0)
      expect(input.is('input[type="text"]')).to.be.true

    })

    it('renders with a remove icon', () => {

      const searchbox = shallow(<Searchbox q="foo" />)
      const searchboxRemoveIconWrapper = searchbox.childAt(2)
      expect(searchboxRemoveIconWrapper.is('div.reframe-searchbox-icon')).to.be.true

      const searchboxRemoveIcon = searchboxRemoveIconWrapper.childAt(0)
      expect(searchboxRemoveIcon.is('i.remove.circle.icon')).to.be.true

    })

    it('renders with value', () => {

      const searchbox = shallow(<Searchbox q="foo" />)
      expect(searchbox.childAt(1).childAt(0).childAt(0).prop('value')).to.equal('foo')

    })

    it('renders with custom prompt', () => {

      const searchbox = shallow(<Searchbox prompt="foo" />)
      expect(searchbox.childAt(1).childAt(0).childAt(0).prop('placeholder')).to.equal('foo')

    })

    it('handles onAbort', () => {

      const onAbort = spy()
      const searchbox = shallow(<Searchbox onAbort={ onAbort } q="foo" />)
      searchbox.childAt(2).simulate('click')
      expect(onAbort.calledOnce).to.be.true

    })

    it('handles onType', () => {

      const onType = spy()
      const searchbox = shallow(<Searchbox onType={ onType } />)
      searchbox.childAt(1).childAt(0).childAt(0).simulate('change', { target: { value: 'foo' } })
      expect(onType.calledOnce).to.be.true
      expect(onType.calledWith('foo')).to.be.true

    })

    it('handles onChange', () => {

      const onChange = spy()
      const searchbox = shallow(<Searchbox onChange={ onChange } />)
      searchbox.childAt(1).childAt(0).childAt(0).simulate('change', { target: { value: 'foo' } })
      expect(onChange.calledOnce).to.be.true
      expect(onChange.calledWith('foo')).to.be.true

    })

  })

})
