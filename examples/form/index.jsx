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
          { code: "residence_id", label: 'Residence', type: "select", placeholder: 'Residence', options: [{key:1,value:"farm/rural"}, {key:2,value:"town of less than 10,000"}, {key:3,value:"town of 10,000 - 50,000"}, {key:4,value:"suburbs of more than 50,000"}, {key:5,value:"city of more than 50,000"}] },
          { code: "address_1", label: 'Mailing Address', type: "textfield", placeholder: 'Address' },
          { code: "address_2", type: "textfield", placeholder: 'Address' },
          { code: "address_3", type: "textfield", placeholder: 'Address' },
          { type: "fields", fields: [
            { code: "city", type: "textfield", placeholder: 'City' },
            { code: "state", type: "stateselect", placeholder: 'State', abbreviations: true },
            { code: "zip", type: "textfield", placeholder: 'Zip' }
          ]},
          { code: 'date_range', type: 'daterange', label: 'Date Range' }
        ]}
      ]
    }
  }
}
