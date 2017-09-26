// @flow

import type { Choose } from './types'

export const choose = (index: number): Choose => ({
  type: 'CHOOSE',
  index
})
