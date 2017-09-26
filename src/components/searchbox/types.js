// @flow

export type Type = {
  type: 'TYPE',
  q: string
}

export type Abort = {
  type: 'ABORT'
}

export type Action =
  | Type
  | Abort

export type State = {
  +q: string
}

export type OnAbort = () => Abort

export type OnChange = (q: string) => void

export type OnType = (q: string) => Type

export type Props = {
  q: ?string,
  prompt: ?string,
  onAbort: ?OnAbort,
  onChange: ?OnChange,
  onType: ?OnType
}
