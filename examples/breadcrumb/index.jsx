import React from 'react'
import ReactDOM from 'react-dom'
import Breadcrumbs from 'breadcrumbs'
import Logger from 'utils/logger'

export default class FormExamples extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Breadcrumbs</h1>

        <div className="ui top attached segment">
          <Breadcrumbs breadcrumbs={[
            { label: 'Animals' },
            { label: 'Sharks' },
            { label: 'Food' }
          ]}/>
          <h2>Hello?</h2>
          <p>Is this food? let me tell you something about food.</p>
        </div>
        <a href="#" className="ui bottom attached positive button">Tell Me Something About Food</a>
      </div>
    )
  }

}
