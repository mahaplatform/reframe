// @flow

export type Set = {
  type: 'SET',
  style: string,
  message: string
}

export type Clear = {
  type: 'CLEAR'
}

export type Action =
  | Set
  | Clear

export type State = {
  message: ?string,
  style: ?string
}

export type Props = {
  children: any,
  message: string,
  style: string,
  onSet: (style: string, message: string) => void,
  onClear: () => void
}
