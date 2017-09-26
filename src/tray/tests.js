import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actions from './actions'
import reducer from './reducer'
import Tray from './tray'

describe('tray component', () => {

  describe('actions', () => {

    it('can dispatch open', () => {

      const expected = {
        type: 'OPEN',
        component: <div>Foo</div>
      }

      expect(actions.open(<div>Foo</div>, 'right')).to.eql(expected)

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

    it('can open tray', () => {

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

    it('can close tray', () => {

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

      const tray = shallow(<Tray><div className="foo" /></Tray>)
      expect(tray.is('div.reframe-tray')).to.be.true

      const child = tray.childAt(0)
      expect(child.is('div.foo')).to.be.true

      const overlay = tray.childAt(1).childAt(0)
      expect(overlay.is('div.reframe-tray-overlay')).to.be.true

      const panel = tray.childAt(2).childAt(0)
      expect(panel.is('div.reframe-tray-panel')).to.be.true

    })

  })

  it('renders open with a component', () => {

    const component = <div className="foo" />

    const tray = shallow(<Tray component={ component } open={ true } />, { lifecycleExperimental: true })

    const panelComponent = tray.childAt(1).childAt(0).childAt(0)
    expect(panelComponent.is('div.foo')).to.be.true

  })

  it('handles close', () => {

    const onClose = spy()

    const tray = shallow(<Tray onClose={ onClose } />)

    const overlay = tray.childAt(0).childAt(0)
    overlay.simulate('click')
    expect(onClose.calledOnce).to.be.true

  })

  it('calls onClear', (done) => {

    const onClear = spy()

    const tray = shallow(<Tray open={ true } onClear={ onClear } />, { lifecycleExperimental: true })

    tray.setProps({ open: false })

    setTimeout(() => {
      expect(onClear.calledOnce).to.be.true
      done()
    }, 500)

  })

})
