import { createSelector } from 'reselect'

const chosenSelector = state => state.chosen

export const ids = createSelector(
  chosenSelector,
  (chosen) => chosen.map(result => result.id)
)
