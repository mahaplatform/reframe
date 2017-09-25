// @flow

import * as GlobalTypes from '../types'

export type Component = GlobalTypes.Component

export type Open = {
  type: 'OPEN',
  component: Component
}

export type Close = {
  type: 'CLOSE'
}

export type Clear = {
  type: 'CLEAR'
}

export type Action =
  | Open
  | Close
  | Clear

export type State = {
  component: ?Component,
  open: boolean
}
