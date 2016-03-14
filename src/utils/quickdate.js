import _ from 'lodash'
import moment from 'moment'

export default class Quickdate {

  static parse(qdString, anchorDate = moment()) {
    if(_.startsWith(qdString, '#')) {
      // Quantized mode
      const unQuantized = qdString.slice(1)

      const qdSegments = this.getSegments(unQuantized)
      const deltas = _.map(qdSegments, this.parseSegment)

      // Get the point in time that's relative to the anchor date, then
      // get the beginning and end of the defined period
      let relativeTime = moment(_.reduce(deltas, (time, delta) => {
        time[delta[0]].apply(time, _.tail(delta))
        return time
      }, moment(anchorDate)))

      let period = _.chain(deltas).first().last().value();

      return {start: moment(relativeTime).startOf(period), end: moment(relativeTime).endOf(period)}

    }
    else {
      const qdSegments = this.getSegments(qdString)
      const deltas = _.map(qdSegments, this.parseSegment)

      let relativeTime = moment(_.reduce(deltas, (time, delta) => {
        time[delta[0]].apply(time, _.tail(delta))
        return time
      }, moment(anchorDate)))

      if(relativeTime.isBefore(anchorDate)) {
        return {start: relativeTime, end: anchorDate}
      }
      else {
        return {start: anchorDate, end: relativeTime}
      }
    }
  }

  static parseSegment(seg) {
    // Get details about the segment definition
    const period = seg.slice(-1)
    const interval = seg.slice(1, -1)

    // Handle past range quickdates
    if(_.startsWith(seg, '-')) {
      return ['subtract', parseInt(interval, 10), period]
    }

    // Handle future range quickdates
    if(_.startsWith(seg, '+')) {
      return ['add', parseInt(interval, 10), period]
    }

    // Handle period-to-now range quickdates
    if(_.startsWith(seg, '@')) {
      return ['startOf', period]
    }
  }

  static getSegments(str) {
    // remove whitespace, separate on comma
    return str.replace(/\s+/gi, '').split(',')
  }
}
