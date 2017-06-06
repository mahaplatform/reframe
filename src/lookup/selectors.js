import { createSelector } from 'reselect'

const resultsSelector = state => state.results

const selectedSelector = state => state.selected

export const chosen = createSelector(
  resultsSelector,
  selectedSelector,
  (results, selected) => {
    const index = selected || 0
    return results.length > 0 ? results[index] : null
  }
)
