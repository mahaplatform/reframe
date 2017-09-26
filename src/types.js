// @ flow

export type Event = {
  target: {
    value: any
  }
}

// import type { ComponentType, ElementType, Node } from 'react'
//
// export type Component = ComponentType<any> | ElementType

export type Component = any

export type Node = any

export type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'

export type SuccessResult = Object

export type FailureResult = Object

export type OnSuccess = (result: SuccessResult) => void

export type OnFailure = (result: FailureResult) => void

export type ApiRequest = {
  type: 'API_REQUEST',
  method: Method,
  endpoint: string,
  meta: ?Object,
  query: ?Object,
  request: ?string,
  success: ?string,
  failure: ?string,
  onSuccess: ?OnSuccess,
  onFailure: ?OnFailure
}

export type ApiRequestRequest = {
  type: 'REQUEST_REQUEST'
}

export type ApiRequestFailure = {
  type: 'REQUEST_REQUEST',
  result: FailureResult
}

export type ApiRequestSuccess = {
  type: 'REQUEST_REQUEST',
  result: SuccessResult
}
