import * as actionTypes from './action_types'

export const query = (q) => ({
  type: actionTypes.QUERY,
  q
})
