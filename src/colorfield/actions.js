// @flow

import type { Set } from './types'

export const set = (color: string): Set => ({
  type: 'SET',
  color
})
