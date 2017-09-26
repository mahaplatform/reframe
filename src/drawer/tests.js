import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actions from './actions'
import reducer from './reducer'
import Drawer from './drawer'

describe('drawer component', () => {

  describe('actions', () => {

    it('can dispatch open', () => {

      const expected = {
        type: 'OPEN',
        component: <div>Foo</div>,
        location: 'right'
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
        location: null,
        open: false
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can open drawer', () => {

      const state = {
        component: null,
        location: null
      }

      const action = {
        type: 'OPEN',
        component: <div>Foo</div>,
        location: 'right'
      }

      const expected = {
        component: <div>Foo</div>,
        location: 'right',
        open: true
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can close drawer', () => {

      const state = {
        component: <div>Foo</div>,
        location: 'right',
        open: true
      }

      const action = {
        type: 'CLOSE'
      }

      const expected = {
        component: <div>Foo</div>,
        location: 'right',
        open: false
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

      const drawer = shallow(<Drawer location="right"><div className="foo" /></Drawer>)
      expect(drawer.is('div.reframe-drawer')).to.be.true

      const child = drawer.childAt(0)
      expect(child.is('div.foo')).to.be.true

      const overlay = drawer.childAt(1).childAt(0)
      expect(overlay.is('div.reframe-drawer-overlay')).to.be.true

      const panel = drawer.childAt(2).childAt(0)
      expect(panel.is('div.reframe-drawer-panel.reframe-drawer-panel-right')).to.be.true

    })

  })

  it('renders open with a component', () => {

    const component = <div className="foo" />

    const drawer = shallow(<Drawer component={ component } open={ true } />, { lifecycleExperimental: true })

    const panelComponent = drawer.childAt(1).childAt(0).childAt(0)
    expect(panelComponent.is('div.foo')).to.be.true

  })

  it('handles close on clicked overlay', () => {

    const onClose = spy()

    const drawer = shallow(<Drawer onClose={ onClose } />)

    const overlay = drawer.childAt(0).childAt(0)
    overlay.simulate('click')
    expect(onClose.calledOnce).to.be.true

  })

  it('calls onClear', (done) => {

    const onClear = spy()

    const drawer = shallow(<Drawer open={ true } onClear={ onClear } />, { lifecycleExperimental: true })

    drawer.setProps({ open: false })

    setTimeout(() => {
      expect(onClear.calledOnce).to.be.true
      done()
    }, 500)

  })

})
