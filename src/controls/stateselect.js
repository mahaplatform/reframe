import React from 'react'
import ReactDOM from 'react-dom'
import Select from './select.js'
import _ from 'lodash'

class Stateselect extends React.Component {

  static propTypes = {
    code: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    defaultValue: React.PropTypes.oneOfType(React.PropTypes.string, React.PropTypes.string),
    asyncStatus: React.PropTypes.string
  }

  static defaultProps = {
    code: null,
    disabled: false,
    abbreviations: false,
    placeholder: '',
    defaultValue: '',
    onChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {value: props.defaultValue || null}
  }

  render() {
    let states = [
      ['AL','Alabama'],
      ['AK','Alaska'],
      ['AZ','Arizona'],
      ['AR','Arkansas'],
      ['CA','California'],
      ['CO','Colorado'],
      ['CT','Connecticut'],
      ['DE','Delaware'],
      ['DC','District Of Columbia'],
      ['FL','Florida'],
      ['GA','Georgia'],
      ['HI','Hawaii'],
      ['ID','Idaho'],
      ['IL','Illinois'],
      ['IN','Indiana'],
      ['IA','Iowa'],
      ['KS','Kansas'],
      ['KY','Kentucky'],
      ['LA','Louisiana'],
      ['ME','Maine'],
      ['MD','Maryland'],
      ['MA','Massachusetts'],
      ['MI','Michigan'],
      ['MN','Minnesota'],
      ['MS','Mississippi'],
      ['MO','Missouri'],
      ['MT','Montana'],
      ['NE','Nebraska'],
      ['NV','Nevada'],
      ['NH','New Hampshire'],
      ['NJ','New Jersey'],
      ['NM','New Mexico'],
      ['NY','New York'],
      ['NC','North Carolina'],
      ['ND','North Dakota'],
      ['OH','Ohio'],
      ['OK','Oklahoma'],
      ['OR','Oregon'],
      ['PA','Pennsylvania'],
      ['RI','Rhode Island'],
      ['SC','South Carolina'],
      ['SD','South Dakota'],
      ['TN','Tennessee'],
      ['TX','Texas'],
      ['UT','Utah'],
      ['VT','Vermont'],
      ['VA','Virginia'],
      ['WA','Washington'],
      ['WV','West Virginia'],
      ['WI','Wisconsin'],
      ['WY','Wyoming'],
    ]
    if(this.props.abbreviations) {
      var options = _(states).map(function(state) { return { key: state[0], value: state[0]} }).value()
    } else {
      var options = _(states).map(function(state) { return { key: state[0], value: state[1]} }).value()
    }
    return <Select ref="control" {...this.props} options={options} />
  }

  getValue() {
    return this.refs.control.getValue()
  }

  setValue(value) {
    return this.refs.control.setValue(value)
  }

  clearField() {
    return this.refs.control.clearField()
  }

  getReference() {
    return {[this.props.code]: this}
  }

}

export default Stateselect
