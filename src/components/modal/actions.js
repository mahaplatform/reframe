// @flow

import type { Open, Close, Clear } from './types'
import type { Component } from '../../types'

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
