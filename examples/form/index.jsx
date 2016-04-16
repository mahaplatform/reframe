import React from 'react'
import ReactDOM from 'react-dom'
import Form from 'form'
import Logger from 'utils/logger'

export default class FormExamples extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Forms</h1>

        <Form {...this.getForm()} />
      </div>
    )
  }

  getForm() {
    return {
      title: 'Here\'s a Form',
      onFieldChange: (field, data) => Logger.info(field, data),
      onSubmit: data => Logger.info(data),
      redirect: '/forms/success',
      sections: [
        { fields: [
          { type: "fields", fields: [
            { code: "date", label: 'Date', type: "datefield", placeholder: 'Date' },
            { code: "time", label: 'Time', type: "timefield", placeholder: 'Time' }
          ]},
          { label: 'Name', type: "fields", required: true, fields: [
            { code: "first_name", type: "textfield", placeholder: 'First Name', required: true },
            { code: "last_name", type: "textfield", placeholder: 'Last Name', required: true }
          ]},
          { code: "email", label: 'Email', type: "emailfield", placeholder: 'Email', required: true },
          { code: "phone", label: 'Phone', type: "textfield", placeholder: 'XXX-XXX-XXXX', required: true },
          { code: "number", label: 'Number', type: "numberfield", placeholder: 'XXX-XXX-XXXX', required: true },
          { code: "url", label: 'URL', type: "textfield", placeholder: 'path', prefix: 'http://mysite.com/', required: true },
        ]},
        { label: 'Textareas', fields: [
          { code: 'simple', label: 'Simple Textarea', type: 'textarea' },
          { code: 'html', label: 'HTML Textarea', type: 'textarea', html: true }

        ]},
        { label: 'Section 2', collapsing: true, fields: [
          { code: "residence_id", label: 'Residence', type: "select", placeholder: 'Residence', options: [{key:1,value:"farm/rural"}, {key:2,value:"town of less than 10,000"}, {key:3,value:"town of 10,000 - 50,000"}, {key:4,value:"suburbs of more than 50,000"}, {key:5,value:"city of more than 50,000"}] },
          { code: "address_1", label: 'Mailing Address', type: "textfield", placeholder: 'Address' },
          { code: "address_2", type: "textfield", placeholder: 'Address' },
          { code: "address_3", type: "textfield", placeholder: 'Address' },
        ]},
        { label: 'Section 3', collapsing: true, fields: [
          { type: "fields", fields: [
            { code: "city", type: "textfield", placeholder: 'City' },
            { code: "state", type: "stateselect", placeholder: 'State', abbreviations: true },
            { code: "zip", type: "textfield", placeholder: 'Zip' }
          ]},
          { code: 'date_range', type: 'daterange', label: 'Date Range' },
          { type: 'fields', fields: [
            { code: 'first_cb', label: 'First Checkbox', type: 'checkbox' },
            { code: 'second_cb', label: 'Second Checkbox', type: 'checkbox' }
          ]},
          { code: 'file_uploader', type: 'filefield', target: '/example/api/upload', defaultValue: 1, assetPath: '/examples/assets' },
          { code: 'empty_file_uploader', type: 'filefield', target: '/example/api/upload', assetPath: '/examples/assets' },
        ]}
      ]
    }
  }
}
