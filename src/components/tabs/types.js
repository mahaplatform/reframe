// @flow

export type Choose = {
  type: 'CHOOSE',
  index: number
}

export type State = {
  +chosen: ?number
}

export type Action =
  | Choose

export type Item = Object

export type OnChoose = (index: number) => Choose

export type Props = {
  chosen: number,
  children: any,
  header: any,
  items: Array<Item>,
  onChoose: OnChoose
}

export type ComponentState = {
  visited: Array<any>,
  transitioning: boolean
}
