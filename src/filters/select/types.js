// @flow

import type { Component } from '../../types'

export type Option = {
  description: string,
  text: string,
  value: string
}

export type Props = {
  endpoint?: string,
  format?: Component | string,
  label?: string,
  multiple?: boolean,
  name?: string,
  options?: Array<Object>,
  q: string,
  results: Object,
  sort: Object,
  text: string,
  value: string,
  onChoose: () => void,
  onUpdate: () => void
}
