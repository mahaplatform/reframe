import React from 'react'
import {shallow} from 'enzyme'
import Tab from '../components/tab'

jest.unmock('../components/tab')

describe('tab component', () => {

  it('renders an inactive tab', () => {
    const tab = shallow(
      <Tab label="Details" index={1} active={false} />
    )
    expect(tab.is('div.item')).toBeTruthy()
    expect(tab.text()).toEqual('Details')
  })

  it('renders an active tab', () => {
    const tab = shallow(
      <Tab label="Details" index={1} active={true} />
    )
    expect(tab.is('div.item.active')).toBeTruthy()
    expect(tab.text()).toEqual('Details')
  })

})
