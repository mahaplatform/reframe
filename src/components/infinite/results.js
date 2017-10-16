// @flow

import type { Node } from '../../types'

import Message from '../message'
import React from 'react'

export const Loading = (): Node => (
  <div className="reframe-loader">
    <div className="ui active inverted dimmer">
      <div className="ui large text loader">Loading</div>
    </div>
  </div>
)

export const Delayed = (): Node => {

  const message = {
    text: 'This is taking longer than we expected...'
  }

  return <Message { ...message } />

}

export const Timeout = (): Node => {

  const message = {
    icon: 'hourglass-end',
    title: 'Your request timed out',
    text: 'It took too long to complete your request',
    // button: {
    //   label: 'Try Again',
    //   handler: () => this._handleFetch.bind(this, 0)
    // }
  }

  return <Message { ...message } />

}

export const Empty = (): Node => {

  const message = {
    icon: 'times',
    title: 'No records',
    text: 'There are no records'
  }

  return <Message { ...message } />

}

export const NotFound = (): Node => {

  const message = {
    icon: 'times',
    title: 'No Results Found',
    text: 'No records matched your query'
  }

  return <Message { ...message } />

}

export const Failure = (): Node => {

  const message = {
    icon: 'exclamation-triangle ',
    title: 'Unable to load records',
    text: 'There was a problem with fetching your data'
  }

  return <Message { ...message } />

}
