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
      expect(tabs.is('div.reframe-tabs')).to.be.true

      const header = tabs.childAt(0)
      expect(header.is('div.reframe-tabs-header')).to.be.true

      const items = header.childAt(0)
      expect(items.is('div.reframe-tabs-items')).to.be.true

      const body = tabs.childAt(1)
      expect(body.is('div.reframe-tabs-body')).to.be.true

    })

    it('renders with header content', () => {

      const header = <div className="foo" />

      const tabs = shallow(<Tabs header={ header } />)
      const headerContentWrapper = tabs.childAt(0).childAt(0)
      expect(headerContentWrapper.is('div.reframe-tabs-header-content')).to.be.true

      const headerContent = headerContentWrapper.childAt(0)
      expect(headerContent.is('div.foo')).to.be.true

    })

    it('renders with items', () => {

      const items = [
        { label: 'One', component: <div className="foo" /> },
        { label: 'Two', component: <div className="bar" /> }
      ]

      const tabs = shallow(<Tabs items={ items } />)
      const headerItemsWrapper = tabs.childAt(0).childAt(0)
      expect(headerItemsWrapper.is('div.reframe-tabs-items')).to.be.true
      expect(headerItemsWrapper.children().length).to.equal(2)

      const headerItem1 = headerItemsWrapper.childAt(0)
      expect(headerItem1.is('div.reframe-tabs-item')).to.be.true

      const headerItem2 = headerItemsWrapper.childAt(1)
      expect(headerItem2.is('div.reframe-tabs-item')).to.be.true

      const tabsWrapper = tabs.childAt(1)
      expect(tabsWrapper.is('div.reframe-tabs-body')).to.be.true
      expect(tabsWrapper.children().length).to.equal(2)

      const tab1 = tabsWrapper.childAt(0)
      expect(tab1.is('div.reframe-tab')).to.be.true

      const tab2 = tabsWrapper.childAt(0)
      expect(tab2.is('div.reframe-tab')).to.be.true

    })

    it('renders with active item', () => {

      const items = [
        { label: 'One', component: <div className="foo" /> },
        { label: 'Two', component: <div className="bar" /> }
      ]

      const tabs = shallow(<Tabs items={ items } chosen={ 0 } />)
      const headerItem1 = tabs.childAt(0).childAt(0).childAt(0)
      expect(headerItem1.is('div.active')).to.be.true

      const headerItem2 = tabs.childAt(0).childAt(0).childAt(1)
      expect(headerItem2.is('div.active')).to.be.false

      const tab1 = tabs.childAt(1).childAt(0)
      expect(tab1.is('div.active')).to.be.true

      const tab2 = tabs.childAt(1).childAt(1)
      expect(tab2.is('div.active')).to.be.false

    })

    it('handles onChoose', (done) => {

      const items = [
        { label: 'One', component: <div className="foo" /> },
        { label: 'Two', component: <div className="bar" /> }
      ]
      const onChoose = spy()
      const tabs = shallow(<Tabs items={ items } onChoose={ onChoose } />)
      tabs.childAt(0).childAt(0).childAt(0).simulate('click')
      setTimeout(() => {
        expect(onChoose.calledOnce).to.be.true
        done()
      }, 20)


    })

  })

})
