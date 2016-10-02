import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import Tabs from '../components/tabs'

jest.unmock('../components/tabs')

describe('tabs component', () => {

  it('renders with tabs and pane', () => {
    const onChangeTab = sinon.spy();
    const config = {
      tabs: [
        { label: 'One', content: <p>One</p> },
        { label: 'Two', content: <p>Two</p> },
        { label: 'Three', content: <p>Three</p> }
      ],
      onChangeTab
    }
    const tabs = shallow(
      <Tabs {...config} />
    )
    expect(tabs.is('div.tabs')).toBeTruthy()
    expect(tabs.children().length).toEqual(2)

    const menu = tabs.childAt(0)
    expect(menu.is('div.ui.top.attached.tabular.menu')).toBeTruthy()
    expect(menu.children().length).toEqual(config.tabs.length)

    const pane = tabs.childAt(1)
    expect(pane.is('div.ui.bottom.attached.active.tab.segment')).toBeTruthy()
  })

})
