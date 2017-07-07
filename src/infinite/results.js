import React from 'react'

export const Loading = (props) => (
  <div className="reframe-loader">
    <div className="ui active inverted dimmer">
      <div className="ui large text loader">Loading</div>
    </div>
  </div>
)

export const Delayed = (props) => (
  <div className="reframe-loader">
    <div className="ui active inverted dimmer">
      <div className="ui large text loader">This is taking longer than we expected...</div>
    </div>
  </div>
)

export const Timeout = (props) => (
  <div className="reframe-message">
    <div className="reframe-message-panel">
      <h2><i className="circular hourglass end icon" /></h2>
      <h3>Your request timed out</h3>
      <p>It took too long to complete your request</p>
      <div className="ui basic button" onClick={ this._handleFetch.bind(this, 0) } >
        Try again
      </div>
    </div>
  </div>
)

export const Empty = (props) => (
  <div className="reframe-message">
    <div className="reframe-message-panel">
      <h2><i className="circular remove icon" /></h2>
      <h3>No Results Found</h3>
      <p>No records matched your query</p>
    </div>
  </div>
)

export const Failure = (props) => (
  <div className="reframe-message">
    <div className="reframe-message-panel">
      <h2><i className="circular warning sign icon" /></h2>
      <h3>Unable to load records</h3>
      <p>There was a problem with fetching your data</p>
    </div>
  </div>
)
