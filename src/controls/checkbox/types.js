// @flow

export type Props = {
  disabled?: boolean,
  defaultValue?: boolean,
  onBusy?: () => void,
  onClick?: (value?: boolean) => void,
  onChange?: (value?: boolean) => void,
  onReady?: () => void
}

export type State = {
  value: boolean
}
