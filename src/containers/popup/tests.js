import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actions from './actions'
import reducer from './reducer'
import Popup from './popup'

describe('popup component', () => {

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

    it('can open popup', () => {

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

    it('can close popup', () => {

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

      const popup = shallow(<Popup><div className="foo" /></Popup>)
      expect(popup.is('div.reframe-popup')).to.be.true

      const child = popup.childAt(0)
      expect(child.is('div.foo')).to.be.true

      const panel = popup.childAt(1).childAt(0)
      expect(panel.is('div.reframe-popup-panel')).to.be.true

      const item = panel.childAt(0)
      expect(item.is('div.reframe-popup-panel-item')).to.be.true

    })

    it('renders open with a component', () => {

      const component = <div className="foo" />
      const popup = shallow(<Popup component={ component } open={ true } />, { lifecycleExperimental: true })
      const panelComponent = popup.childAt(0).childAt(0).childAt(0).childAt(0)
      expect(panelComponent.is('div.foo')).to.be.true

    })

    it('calls onClear', (done) => {

      const onClear = spy()

      const popup = shallow(<Popup open={ true } onClear={ onClear } />, { lifecycleExperimental: true })

      popup.setProps({ open: false })

      setTimeout(() => {
        expect(onClear.calledOnce).to.be.true
        done()
      }, 500)

    })

  })

})
