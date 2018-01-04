import linkifyIt from 'linkify-it'
import React from 'react'
import tlds from 'tlds'

const linkify = linkifyIt()
linkify.tlds(tlds)

export const linkStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity()
      return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK'
    },
    callback
  )
}

export const Link = ({ children, contentState, entityKey }) => {
  const { url } = contentState.getEntity(entityKey).getData()
  return (
   <a href={ url } target="_blank">
     { children }
   </a>
  )
}
