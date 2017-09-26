// @flow

import type { Component, Location, Open, Close, Clear } from './types'

export const open = (component: Component, location: Location): Open => ({
  type: 'OPEN',
  component,
  location
})

export const close = (): Close => ({
  type: 'CLOSE'
})

export const clear = (): Clear => ({
  type: 'CLEAR'
})
