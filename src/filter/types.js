// @flow

export type Load = {
  type: 'API_REQUEST',
  method: string,
  endpoint: string,
  meta: {
    key: string,
    value: string,
    text: string
  },
  query: {
    $ids: ?Array<number>
  },
  request: string,
  success: string,
  failure: string
}

export type Set = {
  type: 'SET',
  key: string,
  value: string
}

export type Choose = {
  type: 'CHOOSE',
  index: number
}

export type Back = {
  type: 'BACK'
}

export type Restart = {
  type: 'RESTART'
}

export type ResetAll = {
  type: 'RESET_ALL'
}

export type Reset = {
  type: 'RESET',
  key: string
}

export type Update = {
  type: 'UPDATE',
  key: string,
  value: string
}

export type Remove = {
  type: 'REMOVE',
  key: string,
  index: number
}

export type Query = {
  type: 'QUERY',
  q: string
}
