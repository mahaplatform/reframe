import * as actionTypes from './action_types'

export const setValue = (value) => ({
  type: actionTypes.SET_VALUE,
  value
})

export const setCurrent = (month, year) => ({
  type: actionTypes.SET_CURRENT,
  month,
  year
})

export const previous = () => ({
  type: actionTypes.PREVIOUS
})

export const next = () => ({
  type: actionTypes.NEXT
})

export const begin = () => ({
  type: actionTypes.BEGIN
})

export const cancel = () => ({
  type: actionTypes.CANCEL
})

export const choose = (value) => ({
  type: actionTypes.CHOOSE,
  value
})

export const clear = () => ({
  type: actionTypes.CLEAR
})
