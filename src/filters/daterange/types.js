// @flow

export type Option = {
  description?: string,
  text: string,
  value: string
}

export type Props = {
  include: Array<any>,
  label: string,
  name: string,
  q: string,
  results: Array<any>,
  onBack: () => void,
  onChoose: (value: any) => void,
  onReset: () => void,
  onUpdate: (value: any) => void,
}
