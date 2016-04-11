import React from 'react'
import ReactDOM from 'react-dom'
import FetchContainer from 'containers/fetch'
import LoadingContainer, {PresentState, EmptyState} from 'snax/lib/containers/loading'
import Details from 'details'
import Logger from 'utils/logger'
import {clientFactory} from 'api'
import moment from 'moment'

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
                          injectAs="properties" single>
            <RepoDetails/>
          </FetchContainer>
        </div>
        <div className="ui attached segment">
          <FetchContainer endpoint="https://api.github.com/orgs/reactjs/repos" client={exampleClient}>
            <RepoList />
          </FetchContainer>
        </div>
        <div className="ui attached segment">
          <h2>Activity Stream <div className="ui right floated button" onClick={this.refreshStream.bind(this)}>Refresh Stream</div></h2>
        </div>
        <div className="ui bottom attached segment">
          <FetchContainer endpoint="https://api.github.com/events"
                          ref="activityContainer" injectAs="events" client={exampleClient}>
            <ActivityList />
          </FetchContainer>
        </div>
      </div>
    )
  }

  refreshStream() {
    this.refs.activityContainer.sync()
  }
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

const ActivityList = props => {
  const tpl = t => _.template(t, {interpolate: /#{([\s\S]+?)}/g})
  const activities = {
    CreateEvent: tpl('created #{ref_type} #{ref} in #{repo.name}'),
    DeleteEvent: tpl('deleted #{ref_type} #{ref} in #{repo.name}'),
    ForkEvent: tpl('forked #{repo.name} into #{forkee.full_name}'),
    IssueCommentEvent: tpl('commented on issue #{issue.title}'),
    PushEvent: tpl('pushed #{commits.length} commits to #{repo.name}'),
    PullRequestEvent: tpl('opened pull request no. #{pull_request.number} on #{repo.name}')
  }
  return (
    <div className="ui feed">
      {_.map(props.events, event => {
        return (
          <div className="event">
            <div className="label"><img src={event.actor.avatar_url} alt={event.actor.login}/></div>
            <div className="content">
              <div className="summary">
                <a href={`https://github.com/${event.actor.login}`} className="user">{event.actor.login}</a>
                &nbsp;{_.invoke(activities, event.type, {...event.payload, repo: event.repo}) || 'did a thing'}
                <div className="date">{moment(event.date).format("MM Do, HH:mm:ss")}</div>
              </div>
              { event.payload.comment ? <div className="extra text">{event.payload.comment.body}</div> : null }
            </div>
          </div>
        )
      })}
    </div>
  )
}