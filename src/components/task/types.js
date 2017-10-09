// @flow

import type { Component, Method, OnFailure, OnSuccess, ApiRequest, ApiRequestRequest, ApiRequestFailure, ApiRequestSuccess } from '../../types'
import type { Location } from '../../containers/drawer/types'

export type Done = () => void

export type Handler = (done: Done) => void

export type ItemRequest = {
  method: Method,
  endpoint: string,
  body: any,
  params: any,
  onFailure: OnFailure,
  onSuccess: OnSuccess
}

export type Request = ApiRequest

export type RequestRequest = ApiRequestRequest

export type RequestFailure = ApiRequestFailure

export type RequestSuccess = ApiRequestSuccess

export type Action =
  | Request
  | RequestRequest
  | RequestFailure
  | RequestSuccess

export type State = {
  +error: ?Object,
  +result: ?any,
  +status: 'pending' | 'submitting' | 'success' | 'failure'
}

export type Props = {
  drawer: Component,
  handler: () => void,
  icon?: string,
  label: string,
  location: Location,
  modal: Component,
  request: ItemRequest,
  route: string,
  onRequest: (itemRequest: ItemRequest) => any,
  onDone: () => void,
}
