import { createSelector } from 'reselect'
import { unflatten } from 'flat'
import Checkit from 'checkit'
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
  (fields, data) => unflatten(fields.reduce((entity, field) => {
    if(field.include === false || field.type == 'text') return entity
    return {
      ...entity,
      [field.name]: !_.isNil(_.get(data, field.name)) ? _.get(data, field.name) : null
    }
  }, {}))
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

export const rules = createSelector(
  fields,
  (fields) => fields.reduce((rules,field) => ({
    ...rules,
    [field.name]: [
      ...field.required ? ['required'] : [],
      ...field.rules || []
    ]
  }), {})
)


export const validateResults = createSelector(
  rules,
  filtered,
  (rules, filtered) => {
    const results = Checkit(rules).validateSync(filtered)
    return results[0] ? results[0].toJSON() : null
  }
)

export const isValid = createSelector(
  validateResults,
  (validateResults) => validateResults === null
)
