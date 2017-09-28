// @flow

import type { Props as Format } from '../../utils/format/types'
import type { Component } from '../../types'

export type Query = {
  type: 'QUERY',
  q: string
}

export type Action =
  | Query

export type Option = {
  record?: any,
  text: string,
  token?: Component,
  value: string

} //TODO: fix this

export type Results = any //TODO: fix this

export type SearchProps = {
  endpoint: string,
  format: Format,
  label: string,
  name: string,
  multiple: boolean,
  options: Array<Option>,
  prompt?: string,
  results: Results,
  sort: string,
  q: string,
  onQuery: () => void,
  onUpdate: (name: string, values: any) => void
}

export type DynamicProps = {
  format: Format,
  name: string,
  multiple: boolean,
  options: Array<Option>,
  results: Results,
  records: Results,
  status: string,
  text: string,
  value: string,
  onUpdate: (name: string, values: any) => void
}

export type OptionsProps = {
  format: Format,
  name: string,
  multiple: boolean,
  options: Array<Option>,
  results: Results,
  onUpdate: (name: string, values: any) => void
}

export type InfiniteProps = {
  endpoint: string,
  filter: Object,
  layout: (props: DynamicProps) => Component,
  sort: string
}

export type State = {
  q: string
}
