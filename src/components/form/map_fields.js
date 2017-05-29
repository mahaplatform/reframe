import _ from 'lodash'

export default function(sections, callback) {
  _.map(sections, function(section) {
    _.map(section.fields, function(field) {
      if(field.type == 'fields') {
        _.map(field.fields, function(subfield) {
          callback(subfield)
        })
      } else {
        callback(field)
      }
    })
  })
}
