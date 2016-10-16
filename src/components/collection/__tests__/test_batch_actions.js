import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { BatchActions } from '../components/toolbar/batch_actions'

jest.unmock('../components/toolbar/batch_actions')

describe('tasks component', () => {

  it('renders batchActions', () => {
    const AddToList = sinon.spy()
    const DeleteAll = sinon.spy()
    const TagAll = sinon.spy()
    const config = {
      batchActions: [
        { label: 'add to list', component: AddToList },
        { label: 'delete all', component: DeleteAll },
        { label: 'tag all', component: TagAll }
      ],
      selectAll: false
    }
    const batch_actions = shallow(
      <BatchActions {...config} />
    )
    expect(batch_actions.is('div.collection-batch-actions')).toBeTruthy()

    const select_all = batch_actions.childAt(0).shallow()

    expect(select_all.is('input[type="checkbox"]')).toBeTruthy()

    const dropdown = batch_actions.childAt(1).shallow()
    expect(dropdown.is('div.ui.dropdown.selection')).toBeTruthy()

    const menu = dropdown.childAt(2).shallow()
    expect(menu.children().length).toEqual(3)

    const add_to_list = menu.childAt(0).shallow()
    expect(add_to_list.is('div.item[data-value=0]')).toBeTruthy()

    const delete_all = menu.childAt(1).shallow()
    expect(delete_all.is('div.item[data-value=1]')).toBeTruthy()

    const tag_all = menu.childAt(2).shallow()
    expect(tag_all.is('div.item[data-value=2]')).toBeTruthy()

  })

})
