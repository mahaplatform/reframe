import React from 'react'
import {shallow} from 'enzyme'
import Breadcrumb from '../breadcrumb'

jest.unmock('../breadcrumb')

describe('breadcrumb reducer', () => {

  it('renders a breadcrumb with a route', () => {

    const breadcrumb = shallow(
      <Breadcrumb label="Dashboard" route="/admin" />
    )
    expect(breadcrumb.is('span')).toBeTruthy()
    expect(breadcrumb.children().length).toEqual(2)

    const link = breadcrumb.childAt(0).shallow()
    expect(link.is('a.section')).toBeTruthy()
    expect(link.text()).toEqual('Dashboard')

    const divider = breadcrumb.childAt(1).shallow()
    expect(divider.is('div.divider')).toBeTruthy()
    expect(divider.text()).toEqual(' / ')
  })

  it('renders a breadcrumb without a route', () => {

    const breadcrumb = shallow(
      <Breadcrumb label="Contacts" />
    )
    expect(breadcrumb.is('span')).toBeTruthy()
    expect(breadcrumb.children().length).toEqual(1)

    const section = breadcrumb.childAt(0).shallow()
    expect(section.is('div.active.section')).toBeTruthy()
    expect(section.text()).toEqual('Contacts')

  })

})
