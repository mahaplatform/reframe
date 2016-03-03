import React from 'react'
import ReactDOM from 'react-dom'
import Details from 'details'
import Logger from 'utils/logger'

export default class FormExamples extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Details</h1>
        <Details details={this.getDetails()}/>
      </div>
    )
  }

  getDetails() {
    return {
      title: 'Sharks',
      properties: [
        {label: 'kingdom', value: 'Animalia'},
        {label: 'phylum', value: 'Chordata'},
        {label: 'class', value: 'Chondrichthyes'},
        {label: 'subclass', value: 'Elasmobranchii'},
        {label: 'superorder', value: 'Selachimorpha'}
      ]
    }
  }

}
