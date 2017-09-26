// @flow

export type Item = Object

export type Items = Array<Item>

export type Done = () => void

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

export type Action =
  | Open
  | Close
  | Clear

export type State = {
  +items: ?Items,
  +open: boolean
}

export type Props = {
  children: any,
  items: Items,
  open: boolean,
  onClear: () => void,
  onClose: () => void,
  onOpen: (items: Items) => void
}

export type ChildContext = {
  tasks: {
    open: (items: Items) => void,
    close: () => void
  }
}
