import React from 'react'
import Component from '../component'
import Card from './card'

class Index extends React.Component {

  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
    return <Card {...this.props} />
  }

}

export default Component('card', 'id')(Index)
