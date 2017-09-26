// @flow

export type SetValue = {
  type: 'SET_VALUE',
  value: string
}

export type SetCurrent = {
  type: 'SET_CURRENT',
  month: number,
  year: number
}

export type Previous = {
  type: 'PREVIOUS'
}

export type Next = {
  type: 'NEXT'
}

export type Begin = {
  type: 'BEGIN'
}

export type Cancel = {
  type: 'CANCEL'
}

export type Choose = {
  type: 'CHOOSE',
  value: string
}

export type Clear = {
  type: 'CLEAR'
}

export type Action =
  | SetCurrent
  | SetValue
  | Previous
  | Next
  | Begin
  | Cancel
  | Choose
  | Clear

export type State = {
  +active: boolean,
  +value: ?string,
  +month: ?number,
  +year: ?number
}
