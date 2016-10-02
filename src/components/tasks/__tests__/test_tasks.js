import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import Tasks from '../index'

jest.unmock('../index')

describe('tasks component', () => {

  it('renders tasks', () => {
    const deleteContact = sinon.spy()
    const config = {
      tasks: [
        { label: 'edit contact', route: '/contacts/1/edit', primary: true },
        { label: 'delete contact', handler: deleteContact }
      ]
    }
    const tasks = shallow(
      <Tasks {...config} />
    )

    expect(tasks.is('div.tasks')).toBeTruthy()

    const buttons = tasks.childAt(0)
    expect(buttons.children().length).toEqual(2)

    const primary = buttons.childAt(0)
    expect(primary.is('Task[route="/contacts/1/edit"]')).toBeTruthy()

    const secondary = buttons.childAt(1)
    expect(secondary.is('div.ui.icon.top.right.pointing.dropdown.button')).toBeTruthy()
    expect(secondary.childAt(0).is('i.setting.icon')).toBeTruthy()
    expect(secondary.childAt(1).is('i.caret.down.icon')).toBeTruthy()

    const menu = secondary.childAt(2)
    expect(menu.is('div.menu')).toBeTruthy()
    expect(menu.children().length).toEqual(2)

    const first = menu.childAt(0)
    expect(primary.is('Task[route="/contacts/1/edit"]')).toBeTruthy()

    const second = menu.childAt(1)
    expect(second.is('Task')).toBeTruthy()
  })

})
