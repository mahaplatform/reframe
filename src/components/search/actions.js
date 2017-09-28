//@flow

import type { Query } from './types'

export const query = (q: string): Query => ({
  type: 'QUERY',
  q
})
