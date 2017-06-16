import { createSelector } from 'reselect'

const sectionsSelector = state => state.config

const dataSelector = state => state.data

export const filtered = createSelector(
  sectionsSelector,
  dataSelector,
  (sections, data) => {
    let entity = {}
    _mapFields(sections, field => {
      if(field.include !== false) {
        entity[field.name] = data[field.name]
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

export const errors = createSelector(
  sectionsSelector,
  dataSelector,
  (sections, data) => {
    const message = 'There were problems with your data.'
    let errors = {}
    _mapFields(sections, field => {
      let value = data[field.name]
      if(field.required && _.isEmpty(value)) {
        errors[field.name] = ['field is required']
      }
    })
    return errors ? { message, errors } : null
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
