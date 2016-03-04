import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

class LiveTime extends React.Component {

  static defaultProps = {
    refreshInterval: 5000
  }

  constructor(props) {
    super(props)
    this.state = {
      timeAgo: moment(props.time).fromNow()
    }
  }

  render() {
    return (
      <span>{this.state.timeAgo}</span>
    );
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        timeAgo: moment(this.props.time).fromNow()
      })
    }, this.props.refreshInterval);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

}

export default LiveTime
