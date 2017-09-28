// @flow

import type { Begin, End, Type, Abort } from './types'

export const begin = () => ({
  type: 'BEGIN'
})

export const end = () => ({
  type: 'END'
})

export const type = (q: string): Type => ({
  type: 'TYPE',
  q
})

export const abort = (): Abort => ({
  type: 'ABORT'
})
