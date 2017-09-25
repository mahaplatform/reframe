export type Props = {
  disabled?: boolean,
  defaultValue?: boolean,
  onBusy?: () => void,
  onChange?: (value?: boolean) => void,
  onReady?: () => void,
  onSet?: (value?: boolean) => void
}

export type State = {
  value: boolean
}
