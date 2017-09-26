import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import * as actions from './actions'
import reducer from './reducer'
import Task from './task'

describe('task component', () => {

  describe('actions', () => {

  })

  describe('reducer', () => {

  })

  describe('component', () => {

    it('handles route', () => {

      const onDone = spy()

      const context = {
        router: {
          history: {
            push: spy()
          }
        }
      }

      const task = shallow(<Task label="Foo" route="/a/b/c" onDone={ onDone } />, { context })
      task.simulate('click')
      expect(context.router.history.push.calledOnce).to.be.true
      expect(context.router.history.push.calledWith('/a/b/c')).to.be.true
      expect(onDone.calledOnce).to.be.true

    })

    it('handles function', () => {

      const innerHandler = spy()

      const handler = (done) => {
        innerHandler()
        done()
      }

      const onDone = spy()

      const task = shallow(<Task label="Foo" handler={ handler } onDone={ onDone } />, { context })
      task.simulate('click')
      expect(innerHandler.calledOnce).to.be.true
      expect(onDone.calledOnce).to.be.true
    })

  })

})
