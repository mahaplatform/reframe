// @flow

import type { Type, Abort } from './types'

export const type = (q: string): Type => ({
  type: 'TYPE',
  q
})

export const abort = (): Abort => ({
  type: 'ABORT'
})
