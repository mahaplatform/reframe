// @flow

import type { Component } from '../../types'

import type { Props as Format } from '../../utils/format/types'

export type Alert = {
  color: string,
  message: string
}

export type ListProps = {
  alert?: Alert,
  empty?: string,
  items?: Array<ItemProps>,
  sections?: Array<SectionProps>
}

export type SectionProps = {
  component?: Component,
  content?: any,
  empty?: string,
  items?: Array<ItemProps>,
  title?: string
}

export type ItemProps = {
  className?: string,
  component?: Component,
  content?: any,
  extra?: Component,
  format?: Format,
  handler?: () => void,
  icon?: string,
  label?: string,
  link?: string
}
