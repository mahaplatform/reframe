import { createSelector } from 'reselect'
import _ from 'lodash'

const sectionsSelector = state => state.config

const dataSelector = state => state.data

export const filtered = createSelector(
  sectionsSelector,
  dataSelector,
  (sections, data) => {
    let entity = {}
    _mapFields(sections, field => {
      if(field.include !== false) {
        const value = !_.isNil(data[field.name]) ? data[field.name] : null
        entity[field.name] = value
      }
    })
    return entity
  }
)

export const defaults = createSelector(
  sectionsSelector,
  (sections) => {
    let defaults = {}
    _mapFields(sections, field => {
      if(field.include !== false) {
        defaults[field.name] = field.defaultValue
      }
    })
    return defaults
  }
)

const _mapFields = (sections, callback) => {
  sections.map(section => {
    section.fields.map(field => {
      if(field.type === 'fields') {
        field.fields.map(callback)
      } else {
        callback(field)
      }
    })
  })
}
