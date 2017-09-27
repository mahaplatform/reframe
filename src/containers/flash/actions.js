// @flow

import type { Set, Clear } from './types'

export const set = (style: string, message: string): Set => ({
  type: 'SET',
  style,
  message
})

export const clear = (): Clear => ({
  type: 'CLEAR'
})
