import 'jsdom-global/register'
import { shallow } from 'enzyme'
import Checkbox from './index'
import { expect } from 'chai'
import React from 'react'
import {spy } from 'sinon'

describe('checkbox', () => {

  describe('component', () => {

    it('renders with a default state', () => {

      const control = shallow(<Checkbox />)
      expect(control.is('div.reframe-checkbox')).to.be.true

      const checkbox = control.childAt(0)
      expect(checkbox.is('div.ui.checkbox')).to.be.true

      const icon = checkbox.childAt(0)
      expect(icon.is('i.toggle.off.icon')).to.be.true

    })

    it('renders with a disabled state', () => {

      const control = shallow(<Checkbox disabled={ true } />)
      expect(control.find('div.checkbox').is('.disabled')).to.be.true

    })


    it('renders with a on state', () => {

      const control = shallow(<Checkbox defaultValue={ true } />, { lifecycleExperimental: true })
      expect(control.find('i').is('i.toggle.on.icon')).to.be.true

    })

    it('handles click', () => {

      const control = shallow(<Checkbox />)
      expect(control.find('i').is('i.toggle.off.icon')).to.be.true
      control.find('i').simulate('click')
      expect(control.find('i').is('i.toggle.on.icon')).to.be.true

    })

    it('calls onSet', () => {

      const onSet = spy()
      shallow(<Checkbox onSet={ onSet } />, { lifecycleExperimental: true })
      expect(onSet.calledOnce).to.be.true

    })

    it('calls onReady', () => {

      const onReady = spy()
      shallow(<Checkbox onReady={ onReady } />, { lifecycleExperimental: true })
      expect(onReady.calledOnce).to.be.true

    })

    it('calls onChange', () => {

      const onChange = spy()
      const control = shallow(<Checkbox onChange={ onChange } />, { lifecycleExperimental: true })
      expect(onChange.called).to.be.false
      control.find('i').simulate('click')
      expect(onChange.callCount).to.eql(1)
      expect(onChange.getCall(0).args[0]).to.be.true
      control.find('i').simulate('click')
      expect(onChange.callCount).to.eql(2)
      expect(onChange.getCall(1).args[0]).to.be.false

    })

  })

})
