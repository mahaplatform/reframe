import { createSelector } from 'reselect'
import _ from 'lodash'

const sections = state => state.config

const data = state => state.data

const ready = state => state.ready

const busy = state => state.busy

export const fields = createSelector(
  sections,
  (sections) => sections.reduce((fields, section) => [
    ...fields,
    ...section.fields.reduce((fields, field) => [
      ...fields,
      (field.type === 'fields') ? field.fields.reduce((fields, field) => [
        ...fields,
        field
      ], []) : field
    ], [])
  ], [])
)

export const defaults = createSelector(
  fields,
  (fields) => fields.reduce((defaults, field) => {
    if(field.include === false) return defaults
    return {
      ...defaults,
      [field.name]: field.defaultValue
    }
  }, {})
)

export const filtered = createSelector(
  fields,
  data,
  (fields, data) => fields.reduce((entity, field) => {
    if(field.include === false || field.type == 'text') return entity
    return {
      ...entity,
      [field.name]: !_.isNil(data[field.name]) ? data[field.name] : null
    }
  }, {})
)

export const isReady = createSelector(
  fields,
  ready,
  (fields, ready) => fields.reduce((isReady, field) => {
    if(!isReady) return false
    return _.includes(ready, field.name)
  }, true)
)

export const isBusy = createSelector(
  busy,
  (busy) => busy.length > 0
)
