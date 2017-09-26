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

export type Props = {
  +children: any,
  +component: Component,
  +open: boolean,
  +onClear: () => void,
  +onClose: () => void,
  +onOpen: (component: Component) => Open
}

export type ChildContext = {
  drawer: {
    open: (component: Component) => void,
    close: () => void
  }
}
