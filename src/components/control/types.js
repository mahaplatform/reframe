// @flow

import type { Component } from '../../types'

export type Props = {
  type: Component | string,
  endpoint: string,
  defaultValue: any,
  options: Array<any>,
  tabIndex: number,
  text: string,
  value: string,
  onBusy: () => void,
  onChange: (name: string, value: any) => void,
  onReady: () => void
}
