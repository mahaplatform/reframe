import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actions from './actions'
import reducer from './reducer'
import Tasks from './tasks'

describe('tasks component', () => {

  describe('actions', () => {

    it('can dispatch open', () => {

      const expected = {
        type: 'OPEN',
        items: []
      }

      expect(actions.open([])).to.eql(expected)

    })

    it('can dispatch close', () => {

      const expected = {
        type: 'CLOSE'
      }

      expect(actions.close()).to.eql(expected)

    })

    it('can dispatch clear', () => {

      const expected = {
        type: 'CLEAR'
      }

      expect(actions.clear()).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        error: null,
        items: null,
        open: false,
        result: null,
        status: 'pending'
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can open tasks', () => {

      const state = {}

      const action = {
        type: 'OPEN',
        items:[
          { foo: '1' },
          { bar: '2' },
          { baz: '3' }
        ]
      }

      const expected = {
        items: [
          { foo: '1' },
          { bar: '2' },
          { baz: '3' }
        ],
        open: true
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can close tasks', () => {

      const state = {
        items: [
          { foo: '1' },
          { bar: '2' },
          { baz: '3' }
        ]
      }

      const action = {
        type: 'CLOSE'
      }

      const expected = {
        items: [
          { foo: '1' },
          { bar: '2' },
          { baz: '3' }
        ],
        open: false
      }

      expect(reducer(state, action)).to.eql(expected)

    })

    it('can clear tasks', () => {

      const state = {
        items: [
          { foo: '1' },
          { bar: '2' },
          { baz: '3' }
        ]
      }

      const action = {
        type: 'CLEAR'
      }

      const expected = {
        error: null,
        items: null,
        open: false,
        result: null,
        status: 'pending'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

      const tasks = shallow(<Tasks><div className="foo" /></Tasks>)
      expect(tasks.is('div.reframe-tasks')).to.be.true

      const child = tasks.childAt(0)
      expect(child.is('div.foo')).to.be.true

      const overlay = tasks.childAt(1).childAt(0)
      expect(overlay.is('div.reframe-tasks-overlay')).to.be.true

      const list = tasks.childAt(2).childAt(0)
      expect(list.is('div.reframe-tasks-list')).to.be.true

      const cancel = list.childAt(0)
      expect(cancel.is('div.reframe-tasks-cancel')).to.be.true
      expect(cancel.text()).to.equal('Cancel')

    })

    it('render a list of items', () => {

      const items = [
        { label: 'Foo', handler: () => {} },
        { label: 'Bar', handler: () => {} }
      ]

      const tasks = mount(<Tasks open={ true } items={ items } />)
      const list = tasks.childAt(1)
      expect(list.children().length).to.equal(3)

      const foo = list.childAt(0)
      expect(foo.is('div.reframe-tasks-item')).to.be.true
      expect(foo.text()).to.equal('Foo')

      const bar = list.childAt(1)
      expect(bar.is('div.reframe-tasks-item')).to.be.true
      expect(bar.text()).to.equal('Bar')

      const cancel = list.childAt(2)
      expect(cancel.is('div.reframe-tasks-cancel')).to.be.true
      expect(cancel.text()).to.equal('Cancel')

    })

    it('handles onClose on clicked overlay', () => {

      const onClose = spy()
      const tasks = shallow(<Tasks onClose={ onClose } />)
      const overlay = tasks.childAt(0).childAt(0)
      overlay.simulate('click')
      expect(onClose.calledOnce).to.be.true

    })

    it('handles onClose on clicked cancel', () => {

      const onClose = spy()
      const tasks = shallow(<Tasks onClose={ onClose } />)
      const cancel = tasks.find('div.reframe-tasks-cancel')
      cancel.simulate('click')
      expect(onClose.calledOnce).to.be.true

    })

    it('calls onClear', (done) => {

      const onClear = spy()

      const tasks = mount(<Tasks open={ true } onClear={ onClear } />)

      tasks.setProps({ open: false })

      setTimeout(() => {
        expect(onClear.calledOnce).to.be.true
        done()
      }, 500)

    })

    it('handles item with a route', () => {

      const onClose = spy()

      const items = [
        { label: 'Foo', route: '/a/b/c' }
      ]

      const context = {
        router: {
          history: {
            push: spy()
          }
        }
      }

      const tasks = shallow(<Tasks open={ true } items={ items } onClose={ onClose }  />, { context })
      const foo = tasks.find('div.reframe-tasks-list div.reframe-tasks-item')
      foo.simulate('click')
      expect(context.router.history.push.calledOnce).to.be.true
      expect(context.router.history.push.calledWith('/a/b/c')).to.be.true
      expect(onClose.calledOnce).to.be.true

    })

    it('handles item with function', () => {

      const innerHandler = spy()

      const handler = (done) => {
        innerHandler()
        done()
      }
      const onClose = spy()

      const items = [
        { label: 'Foo', handler }
      ]

      const tasks = shallow(<Tasks open={ true } items={ items } onClose={ onClose }  />)
      const foo = tasks.find('div.reframe-tasks-list div.reframe-tasks-item')
      foo.simulate('click')
      expect(innerHandler.calledOnce).to.be.true
      expect(onClose.calledOnce).to.be.true
    })

  })

})
