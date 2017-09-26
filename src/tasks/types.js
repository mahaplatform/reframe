// @flow

import type { Method, OnFailure, OnSuccess, ApiRequest, ApiRequestRequest, ApiRequestFailure, ApiRequestSuccess } from '../types'

export type Items = Array<Object>

export type Done = () => void

export type Handler = (done: Done) => void

export type ItemRequest = {
  method: Method,
  endpoint: string,
  onFailure: OnFailure,
  onSuccess: OnSuccess
}

export type Open = {
  type: 'OPEN',
  items: Items
}

export type Close = {
  type: 'CLOSE'
}

export type Clear = {
  type: 'CLEAR'
}

export type Request = ApiRequest

export type RequestRequest = ApiRequestRequest

export type RequestFailure = ApiRequestFailure

export type RequestSuccess = ApiRequestSuccess

export type Action =
  | Open
  | Close
  | Clear
  | Request
  | RequestRequest
  | RequestFailure
  | RequestSuccess

export type State = {
  +error: ?Object,
  +items: ?Items,
  +open: boolean,
  +result: ?any,
  +status: 'pending' | 'submitting' | 'success' | 'failure'
}

export type Props = {
  children: any,
  items: Items,
  open: boolean,
  onClear: () => void,
  onClose: () => void,
  onOpen: (items: Items) => void,
  onRequest: (itemRequest: ItemRequest) => any
}

export type ChildContext = {
  tasks: {
    open: (items: Items) => void,
    close: () => void
  }
}
