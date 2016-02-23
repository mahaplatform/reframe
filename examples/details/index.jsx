import React from 'react'
import ReactDOM from 'react-dom'
import Details from 'src/details'
import Logger from 'src/utils/logger'

export default class FormExamples extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Details</h1>
        <Details title="Sharks" properties={this.getDetails()}/>
      </div>
    )
  }

  getDetails() {
    return [
     { label: 'kingdom', value: 'Animalia' },
     { label: 'phylum', value: 'Chordata' },
     { label: 'class', value: 'Chondrichthyes' },
     { label: 'subclass', value: 'Elasmobranchii' },
     { label: 'superorder', value: 'Selachimorpha' }
    ]
  }

}
