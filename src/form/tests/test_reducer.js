import reducer from '../reducer'
import * as actionTypes from '../action_types'

jest.unmock('../reducer')
jest.unmock('lodash')

describe('collection reducer', () => {

  it('set sections', () => {
    let state = {
      status: 'initialized',
      sections: []
    }
    let sections = [
      {
        fields: [
          { code: 'first_name', label: 'First Name', type: 'textfield' }
        ]
      }
    ]
    let action = {
      type: actionTypes.SET_SECTIONS,
      sections
    }
    let expected = {
      status: 'configured',
      sections,
      data: {}
    }
    expect(reducer(state, action)).toEqual(expected)
  })

  // it('set sections default data', () => {
  //   let state = {
  //     status: 'initialized',
  //     sections: []
  //   }
  //   let sections = [
  //     {
  //       fields: [
  //         { code: 'first_name', label: 'First Name', type: 'textfield', defaultValue: 'Greg' }
  //       ]
  //     }
  //   ]
  //   let action = {
  //     type: actionTypes.SET_SECTIONS,
  //     sections
  //   }
  //   let expected = {
  //     status: 'configured',
  //     sections,
  //     data: {
  //       first_name: 'Greg'
  //     }
  //   }
  //   expect(reducer(state, action)).toEqual(expected)
  // })
})