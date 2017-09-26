import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actions from './actions'
import reducer from './reducer'
import Modal from './modal'

describe('modal component', () => {

  describe('actions', () => {

    it('can dispatch open', () => {

      const expected = {
        type: 'OPEN',
        component: <div>Foo</div>
      }

      expect(actions.open(<div>Foo</div>)).to.eql(expected)

    })

    it('can dispatch close', () => {

      const expected = {
        type: 'CLOSE'
      }

      expect(actions.close()).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        component: null,
        open: false
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can open modal', () => {

      const state = {
        component: null
      }

      const action = {
        type: 'OPEN',
        component: <div>Foo</div>
      }

      const expected = {
        component: <div>Foo</div>,
        open: true
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can close modal', () => {

      const state = {
        component: <div>Foo</div>,
        open: true
      }

      const action = {
        type: 'CLOSE'
      }

      const expected = {
        component: <div>Foo</div>,
        open: false
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

      const modal = shallow(<Modal><div className="foo" /></Modal>)
      expect(modal.is('div.reframe-modal')).to.be.true

      const child = modal.childAt(0)
      expect(child.is('div.foo')).to.be.true

      const overlay = modal.childAt(1).childAt(0)
      expect(overlay.is('div.reframe-modal-overlay')).to.be.true

      const window = modal.childAt(2).childAt(0)
      expect(window.is('div.reframe-modal-window')).to.be.true

    })

  })

  it('renders open with a component', () => {

    const component = <div className="foo" />

    const modal = shallow(<Modal component={ component } open={ true } />, { lifecycleExperimental: true })

    const panelComponent = modal.childAt(1).childAt(0).childAt(0)
    expect(panelComponent.is('div.foo')).to.be.true

  })

  it('handles close on clicked overlay', () => {

    const onClose = spy()

    const modal = shallow(<Modal onClose={ onClose } />)

    const overlay = modal.childAt(0).childAt(0)
    overlay.simulate('click')
    expect(onClose.calledOnce).to.be.true

  })

  it('calls onClear', (done) => {

    const onClear = spy()

    const modal = shallow(<Modal open={ true } onClear={ onClear } />, { lifecycleExperimental: true })

    modal.setProps({ open: false })

    setTimeout(() => {
      expect(onClear.calledOnce).to.be.true
      done()
    }, 500)

  })

})
