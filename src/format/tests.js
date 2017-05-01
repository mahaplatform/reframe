
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Format from './index'

describe('format components', () => {

  describe('default component', () => {

    it('renders with a value', () => {

      const config = {
        value: 'foo'
      }

      const format = shallow(<Format {...config} />)

      expect(format.is('span')).to.be.true
      expect(format.text()).to.equal('foo')

    })

    it('renders without a a value', () => {

      const config = {}

      const format = shallow(<Format {...config} />)

      expect(format.is('span')).to.be.true
      expect(format.text()).to.equal('')

    })

  })

  describe('status component', () => {

    it('renders with a value', () => {

      const config = {
        value: 'foo',
        format: 'status'
      }

      const format = shallow(<Format {...config} />)

      expect(format.is('span.foo')).to.be.true
      expect(format.text()).to.equal('FOO')

    })

    it('renders without a value', () => {

      const config = {
        format: 'status'
      }

      const format = shallow(<Format {...config} />)

      expect(format.is('span')).to.be.true
      expect(format.text()).to.be.empty

    })

  })

  describe('check component', () => {

    it('renders with a value')

  })

  describe('yesno component', () => {

    it('renders with a value')

  })

  describe('currency component', () => {

    it('renders with a value')

  })

  describe('date component', () => {

    it('renders with a value')

  })

  describe('capitalize component', () => {

    it('renders with a value')

  })

  describe('email component', () => {

    it('renders with a value')

  })

  describe('link component', () => {

    it('renders with a value')

  })

})
