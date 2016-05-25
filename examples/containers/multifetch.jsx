import React from 'react'
import ReactDOM from 'react-dom'
import MultiFetchContainer from 'containers/fetch/multi'
import LoadingContainer, {PresentState, EmptyState, ErrorState} from 'containers/loading'
import Details from 'details'
import Logger from 'utils/logger'
import {clientFactory} from 'api'
import moment from 'moment'

const exampleClient = clientFactory({ defaultRequest: { mixin: { withCredentials: false } } })

export default class MultiFetchExamples extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Multi-Fetch Container</h1>

        <div className="ui top attached segment">
          <h2>reactjs organization</h2>
        </div>
        <MultiFetchContainer endpoints={this.getContainerEndpoints()} client={exampleClient}>
          <RepoInfo/>
        </MultiFetchContainer>
        <div className="ui attached segment">
          <h2>Handling Errors</h2>
        </div>
        <div className="ui attached segment">
          <MultiFetchContainer endpoints={this.getFailingContainerEndpoints()} client={exampleClient}>
            <RepoInfo/>
          </MultiFetchContainer>
        </div>
        <div className="ui attached segment">
          <h2>Unwrapping</h2>
          <p>The response is wrapped in an API structure, so it's automatically unwrapped by the FetchContainer</p>
        </div>
        <div className="ui attached segment">
          <MultiFetchContainer endpoints={{test_data: '/examples/data.json'}} client={exampleClient}>
            <NameList/>
          </MultiFetchContainer>
        </div>
      </div>
    )
  }

  getContainerEndpoints() {
    return {
      details: 'https://api.github.com/orgs/reactjs',
      repos: 'https://api.github.com/orgs/reactjs/repos'
    }
  }

  getFailingContainerEndpoints() {
    return {
      details: 'https://api.github.com/orgs/reactjs',
      repos: 'https://api.github.com/orgs/reactjs/repos',
      bogus: '/non/existent'
    }
  }
}

const RepoInfo = props => {
  return (
    <div>
      <div className="ui attached segment">
        <RepoDetails properties={props.details} />
      </div>
      <div className="ui attached segment">
        <RepoList data={props.repos} />
      </div>
    </div>
  )
}

const RepoDetails = props => {
  const details = _.map(props.properties, (v, k) => { return {label: k, value: v}})
  return <Details details={{title: "Organization Details", properties: details}} />
}

const RepoList = props => {
  const repos = props.data || []
  return (
    <LoadingContainer content={props.data} useLoader>
      <EmptyState>
        <h1>No Repos.</h1>
      </EmptyState>
      <PresentState>
        <table className="ui very basic table">
          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th>Language</th>
              <th>Stargazers</th>
            </tr>
          </thead>
          <tbody>
            {repos.map(repo => {
              return (
                <tr>
                  <td>{repo.name}</td>
                  <td><a href={repo.html_url} target="_blank">{repo.html_url}</a></td>
                  <td>{repo.language}</td>
                  <td>{repo.stargazers_count}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </PresentState>
    </LoadingContainer>
  )
}

const NameList = props => {
  const names = props.test_data || []
  return (
    <LoadingContainer content={props.test_data} useLoader>
      <EmptyState>
        <h1>No People</h1>
      </EmptyState>
      <PresentState>
        <table className="ui very basic table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {names.map(person => {
              return (
                <tr>
                  <td>{person.id}</td>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </PresentState>
    </LoadingContainer>
  )
}
