import * as actionTypes from './action_types'

export function changeTab(index: number) {
  return {
    type: actionTypes.CHANGE_TAB,
    index
  }
}
