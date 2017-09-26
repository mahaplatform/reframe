// @flow

import type { Component, Open, Close, Clear } from './types'

export const open = (component: Component): Open => ({
  type: 'OPEN',
  component
})

export const close = (): Close => ({
  type: 'CLOSE'
})

export const clear = (): Clear => ({
  type: 'CLEAR'
})
