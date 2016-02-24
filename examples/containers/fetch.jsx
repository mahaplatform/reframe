import React from 'react'
import ReactDOM from 'react-dom'
import FetchContainer from 'src/containers/fetch'
import LoadingContainer, {PresentState, EmptyState} from 'snax/lib/containers/loading'
import Details from 'src/details'
import Logger from 'src/utils/logger'
import {clientFactory} from 'src/api'

const exampleClient = clientFactory({ defaultRequest: { mixin: { withCredentials: false } } })

export default class FetchExamples extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Fetch Container</h1>

        <div className="ui top attached segment">
          <h2>reactjs</h2>
        </div>
        <div className="ui attached segment">
          <FetchContainer endpoint="https://api.github.com/orgs/reactjs" client={exampleClient} blocking
                          injectAs="properties" mapper={(value, label) => { return {label, value} }}>
            <Details title="Organization Details" />
          </FetchContainer>
        </div>
        <div className="ui bottom attached segment">
          <FetchContainer endpoint="https://api.github.com/orgs/reactjs/repos" client={exampleClient}>
            <RepoList />
          </FetchContainer>
        </div>
      </div>
    )
  }

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
