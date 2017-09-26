import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
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
        type: 'OPEN',
        message,
        options
      }

      expect(actions.open(message, options)).to.eql(expected)

    })

    it('can dispatch clear', () => {

      const expected = {
        type: 'CLOSE'
      }

      expect(actions.close()).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        message: null,
        options: null,
        open: false
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can open prompt', () => {

      const state = {
        message: null,
        options: null,
        open: false
      }

      const action = {
        type: 'OPEN',
        message,
        options
      }

      const expected = {
        message,
        options,
        open: true
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can close prompt', () => {

      const state = {
        message,
        options,
        open: true
      }

      const action = {
        type: 'CLOSE'
      }

      const expected = {
        message,
        options,
        open: false
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can clear prompt', () => {

      const state = {
        message,
        options,
        open: true
      }

      const action = {
        type: 'CLEAR'
      }

      const expected = {
        message: null,
        options: null,
        open: false
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

      const prompt = shallow(<Prompt />)
      expect(prompt.is('div.reframe-prompt')).to.be.true

    })


    it('handles onClose on clicked overlay', () => {

      const onClose = spy()
      const prompt = shallow(<Prompt onClose={ onClose } />)
      const overlay = prompt.childAt(0).childAt(0)
      overlay.simulate('click')
      expect(onClose.calledOnce).to.be.true

    })

    it('handles onClose on clicked cancel', () => {

      const onClose = spy()
      const prompt = shallow(<Prompt cancel={ true } onClose={ onClose } />)
      const cancel = prompt.find('div.reframe-prompt-cancel')
      cancel.simulate('click')
      expect(onClose.calledOnce).to.be.true

    })

    it('calls onClear', (done) => {

      const onClear = spy()

      const prompt = shallow(<Prompt open={ true } onClear={ onClear } />, { lifecycleExperimental: true })

      prompt.setProps({ open: false })

      setTimeout(() => {
        expect(onClear.calledOnce).to.be.true
        done()
      }, 500)

    })

  })

})
