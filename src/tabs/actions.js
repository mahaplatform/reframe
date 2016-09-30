import * as actionTypes from './action_types'

export function changeTab(index) {
  return {
    type: actionTypes.CHANGE_TAB,
    index
  }
}
