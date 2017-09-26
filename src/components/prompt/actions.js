// @flow

import type { Options, Open, Close, Clear } from './types'

export const open = (message: string, options: Options): Open => ({
  type: 'OPEN',
  message,
  options
})

export const close = (): Close => ({
  type: 'CLOSE'
})

export const clear = (): Clear => ({
  type: 'CLEAR'
})
