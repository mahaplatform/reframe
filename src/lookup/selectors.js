import { createSelector } from 'reselect'

const resultsSelector = state => state.results

const selectedSelector = state => state.selected

export const chosen = createSelector(
  resultsSelector,
  selectedSelector,
  (results, selected) => (selected !== null && results.length > 0) ? results[selected] : null
)
