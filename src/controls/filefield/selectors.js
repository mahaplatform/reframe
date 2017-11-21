import { createSelector } from 'reselect'
import _ from 'lodash'

const filesSelector = (state, props) => state.files

const multipleSelector = (state, props) => props.multiple

export const files = createSelector(
  filesSelector,
  (files) => files.sort((fileA, fileB) => {
    const aIsImage = (fileA.contentType || fileA.asset.content_type).match(/image/) !== null
    const bIsImage = (fileB.contentType || fileB.asset.content_type).match(/image/) !== null
    if (aIsImage && !bIsImage) return -1
    if (bIsImage && !aIsImage) return 1
    return 0
  })
)

export const value = createSelector(
  files,
  multipleSelector,
  (files, multiple) => {
    const assetIds = files.filter(file => !_.isNil(file.asset)).map(file => file.asset.id)
    return multiple ? assetIds : assetIds[0]
  }
)
