import * as actionTypes from './action_types'

export function changeTab(cid, index) {
  return {
    type: actionTypes.CHANGE_TAB,
    cid,
    index
  }
}
