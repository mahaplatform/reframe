import reducer from '../reducer'
import * as actionTypes from '../action_types'

jest.unmock('../reducer')

describe('tabs reducer', () => {

    it('it sets the defaults', () => {
      let state = undefined
      let action = {
        type: ''
      }
      let expected = {
        active: 0
      }
      expect(reducer(state, action)).toEqual(expected)
    })

    it('it changes the tab', () => {
      let state = {
        active: 0
      }
      let action = {
        type: actionTypes.CHANGE_TAB,
        index: 1
      }
      let expected = {
        active: 1
      }
      expect(reducer(state, action)).toEqual(expected)
    })

})
