import 'jsdom-global/register'
import { shallow } from 'enzyme'
import Collection from './collection'
import { expect } from 'chai'
import React from 'react'
import sinon from 'sinon'

describe('collection', () => {

  describe('component', () => {

    it('renders with a default state', () => {

      const collection = shallow(<Collection />)
      expect(collection.is('div.reframe-collection')).to.be.true

    })

  })

})
