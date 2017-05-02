import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actionTypes from './action_types'
import * as actions from './actions'
import reducer from './reducer'
import Flash from './component'

describe('flash component', () => {

  describe('actions', () => {

    it('can dispatch set', () => {

      const expected = {
        type: actionTypes.SET,
        style: 'success',
        message: 'good job'
      }

      expect(actions.set('success', 'good job')).to.eql(expected)

    })

    it('can dispatch clear', () => {

      const expected = {
        type: actionTypes.CLEAR
      }

      expect(actions.clear()).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        message: null,
        style: null
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can set flash message', () => {

      const state = {
        message: null,
        style: null
      }

      const action = {
        type: actionTypes.SET,
        style: 'success',
        message: 'good job'
      }

      const expected = {
        style: 'success',
        message: 'good job'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can clear flash message', () => {

      const state = {
        style: 'success',
        message: 'good job'
      }

      const action = {
        type: actionTypes.CLEAR
      }

      const expected = {
        message: null,
        style: null
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

      const config = {
        message: null,
        style: null,
        onSet: () => {},
        onClear: () => {}
      }

      const flash = shallow(
        <Flash {...config}><div>child</div></Flash>
      )
      expect(flash.is('div.reframe-flash')).to.be.true
      expect(flash.children.length).to.be.equal(1)

      const child = flash.childAt(0)
      expect(child.is('div')).to.be.truthy
      expect(child.text()).to.equal('child')
    })

    it('renders with flash', () => {

      const config = {
        message: 'good job',
        style: 'success',
        onSet: () => {},
        onClear: () => {}
      }

      const flash = shallow(
        <Flash {...config} />
      )

      const transitionGroup = flash.childAt(0)
      const panel = transitionGroup.childAt(0)
      expect(panel.is('div.reframe-flash-popup.success')).to.be.true

      const paragraph = panel.childAt(0)
      expect(paragraph.is('p')).to.be.truthy
      expect(paragraph.text()).to.equal('good job')

      const icon = paragraph.childAt(0)
      expect(icon.is('i.fa.fa-check-circle')).to.be.true

    })

  })

})
