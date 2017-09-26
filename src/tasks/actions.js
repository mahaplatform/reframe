// @flow

import type { Items, Open, Close, Clear } from './types'

export const open = (items: Items): Open => ({
  type: 'OPEN',
  items
})

export const close = (): Close => ({
  type: 'CLOSE'
})

export const clear = (): Clear => ({
  type: 'CLEAR'
})
