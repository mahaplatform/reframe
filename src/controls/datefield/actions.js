// @flow

import type { SetValue, SetCurrent, Previous, Next, Begin, Cancel, Choose, Clear } from './types'

export const setValue = (value: string): SetValue => ({
  type: 'SET_VALUE',
  value
})

export const setCurrent = (month: number, year: number): SetCurrent => ({
  type: 'SET_CURRENT',
  month,
  year
})

export const previous = (): Previous => ({
  type: 'PREVIOUS'
})


export const next = (): Next => ({
  type: 'NEXT'
})

export const begin = (): Begin => ({
  type: 'BEGIN'
})

export const cancel = (): Cancel => ({
  type: 'CANCEL'
})

export const choose = (value: string): Choose => ({
  type: 'CHOOSE',
  value
})

export const clear = (): Clear => ({
  type: 'CLEAR'
})
