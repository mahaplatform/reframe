import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Task from '../task'

jest.unmock('../task')

describe('task component', () => {

  it('renders with a route', () => {
    const task = shallow(
      <Task label='Details' route='/contacts/1/details' />
    )
    expect(task.is('Link[to="/contacts/1/details"]')).toBeTruthy()
    expect(task.childAt(0).text()).toEqual('Details')
  })

  it('renders primary as a button', () => {
    const task = shallow(
      <Task label='Details' route='/contacts/1/details' primary={true} />
    )
    expect(task.is('Link.ui.button')).toBeTruthy()
  })

  it('renders secondary as a link', () => {
    const task = shallow(
      <Task label='Details' route='/contacts/1/details' primary={false} />
    )
    expect(task.is('Link')).toBeTruthy()
  })

  it('renders with a handler', () => {
    const onClick = sinon.spy()
    const task = shallow(
      <Task label='Details' handler={onClick} />
    )
    expect(task.is('a[onClick]')).toBeTruthy()
    expect(task.text()).toEqual('Details')
    task.simulate('click')
    expect(onClick.calledOnce).toEqual(true)
  })

  it('renders primary as a button', () => {
    const task = shallow(
      <Task label='Details' handler={() => {}} primary={true} />
    )
    expect(task.is('a.ui.button')).toBeTruthy()
  })

  it('renders secondary as a link', () => {
    const task = shallow(
      <Task label='Details' handler={() => {}} primary={false} />
    )
    expect(task.is('a')).toBeTruthy()
  })

})
