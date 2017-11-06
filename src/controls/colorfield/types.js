export type Set = {
  type: string,
  color: string
}

export type Action =
  | Set

export type State = {
  +color: ?string
}

export type Props = {
  color: string,
  colors: string,
  defaultValue: string,
  disabled: boolean,
  tabIndex: number,
  onBusy: () => void,
  onChange: (value: string) => void,
  onReady: () => void,
  onSet: (value: string) => void
}
