import 'jsdom-global/register'
import { shallow } from 'enzyme'
import * as actions from './actions'
import reducer from './reducer'
import Colorfield from './colorfield'
import { expect } from 'chai'
import { spy } from 'sinon'
import React from 'react'

describe('collection', () => {

  describe('actions', () => {

    it('can dispatch set', () => {

      const expected = {
        type: 'SET',
        color: 'red'
      }

      expect(actions.set('red')).to.eql(expected)

    })

  })

  describe('reducer', () => {

    it('can set default state', () => {

      const expected = {
        color: null
      }

      expect(reducer(undefined, '')).to.eql(expected)

    })

    it('can set color', () => {

      const state = {
        color: null
      }

      const action = {
        type: 'SET',
        color: 'red'
      }

      const expected = {
        color: 'red'
      }

      expect(reducer(state, action)).to.eql(expected)

    })

  })

  describe('component', () => {

    it('renders with a default state', () => {

      const colorfield = shallow(<Colorfield />)
      expect(colorfield.is('div.reframe-colorfield')).to.be.true
      expect(colorfield.children().length).to.equal(10)
      expect(colorfield.childAt(0).node.props.style.backgroundColor).to.equal('#DB2828')
      expect(colorfield.childAt(1).node.props.style.backgroundColor).to.equal('#F2711C')
      expect(colorfield.childAt(2).node.props.style.backgroundColor).to.equal('#FBBD08')
      expect(colorfield.childAt(3).node.props.style.backgroundColor).to.equal('#B5CC18')
      expect(colorfield.childAt(4).node.props.style.backgroundColor).to.equal('#21BA45')
      expect(colorfield.childAt(5).node.props.style.backgroundColor).to.equal('#00B5AD')
      expect(colorfield.childAt(6).node.props.style.backgroundColor).to.equal('#2185D0')
      expect(colorfield.childAt(7).node.props.style.backgroundColor).to.equal('#6435C9')
      expect(colorfield.childAt(8).node.props.style.backgroundColor).to.equal('#A333C8')
      expect(colorfield.childAt(9).node.props.style.backgroundColor).to.equal('#E03997')

      const color = colorfield.childAt(0)
      expect(color.is('div.reframe-color'))

    })

    it('renders with a custom colors', () => {

      const colors = [
        { name: 'red', value: '#990000' }
      ]

      const colorfield = shallow(<Colorfield colors={ colors } />)
      expect(colorfield.is('div.reframe-colorfield')).to.be.true
      expect(colorfield.children().length).to.equal(1)
      expect(colorfield.childAt(0).node.props.style.backgroundColor).to.equal('#990000')

    })

    it('renders with selected color', () => {

      const color = 'red'
      const colorfield = shallow(<Colorfield color={ color } />)
      const red = colorfield.childAt(0)
      const icon = red.childAt(0)
      expect(icon.is('i.check.icon')).to.be.true

      const orange = colorfield.childAt(1)
      expect(orange.children().length).to.equal(0)

    })

    it('handles click', () => {

      const onSet = spy()
      const colorfield = shallow(<Colorfield onSet={ onSet } />)

      const orange = colorfield.childAt(1)
      orange.simulate('click')
      expect(onSet.getCall(0).args[0]).to.equal('orange')
    })

    it('calls onSet', () => {

      const onSet = spy()
      shallow(<Colorfield defaultValue="red" onSet={ onSet } />, { lifecycleExperimental: true })
      expect(onSet.calledOnce).to.be.true

    })

    it('calls onReady', () => {

      const onReady = spy()
      shallow(<Colorfield onReady={ onReady } />, { lifecycleExperimental: true })
      expect(onReady.calledOnce).to.be.true

    })

  })

})
