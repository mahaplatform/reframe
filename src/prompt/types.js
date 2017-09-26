// @flow

import type { Props as Task } from '../task/types'

export type Option = Object

export type Options = Array<Option>

export type Open = {
  type: 'OPEN',
  message: string,
  options: Options
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
  message: ?string,
  options: ?Options,
  open: boolean
}

export type OnClear = () => void

export type OnClose = () => void

export type OnOpen = (message: string, options: Options) => void

export type Props = {
  cancel: boolean,
  children: any,
  message: string,
  open: boolean,
  options: Array<Task>,
  onClear: OnClear,
  onClose: OnClose,
  onOpen: OnOpen
}

export type ChildContext = {
  ...PromptChildContext,
  ...ConfirmChildContext
}

export type PromptChildContext = {
  prompt: {
    open: OnOpen,
    close: OnClose,
  }
}

export type ConfirmHandler = () => void

export type ConfirmChildContext = {
  confirm: {
    open: (message: string, yes: ConfirmHandler, no: ConfirmHandler) => void,
    close: OnClose,
  }
}
