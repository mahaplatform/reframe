import { createSelector } from 'reselect'
import _ from 'lodash'

const filesSelector = (state, props) => state.files

const multipleSelector = (state, props) => state.multiple

export const value = createSelector(
  filesSelector,
  multipleSelector,
  (files, multiple) => {
    const assetIds = files.filter(file => !_.isNil(file.asset)).map(file => file.asset.id)
    return multiple ? assetIds : assetIds[0]
  }
)
