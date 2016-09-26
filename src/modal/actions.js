import * as actionTypes from './action_types'

export function openModal() {
  return { type: actionTypes.OPEN_MODAL }
}

export function closeModal() {
  return { type: actionTypes.CLOSE_MODAL }
}