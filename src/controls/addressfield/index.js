import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class AddressField extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.object,
    onChange: PropTypes.func,
    onReady: PropTypes.func
  }

  street1 = null
  street2 = null
  city = null
  province = null
  postalcode = null

  state = {
    street1: '',
    street2: '',
    city: '',
    province: '',
    postalcode: ''
  }

  _handleChange = this._handleChange.bind(this)

  render() {
    const { street1, street2, city, province, postalcode } = this.state
    return (
      <div className="addressfield">
        <div className="ui field">
          <input className="ui input" type="text" placeholder="Street 1" defaultValue={ street1 } onChange={ this._handleChange } ref={ node => this.street1 = node} />
        </div>
        <div className="ui field">
          <input className="ui input" type="text" placeholder="Street 2" defaultValue={ street2 } onChange={ this._handleChange } ref={ node => this.street2 = node} />
        </div>
        <div className="ui three fields">
          <div className="ui field">
            <input className="ui input" type="text" placeholder="City" defaultValue={ city } onChange={ this._handleChange } ref={ node => this.city = node} />
          </div>
          <div className="ui field">
            <input className="ui input" type="text" placeholder="State/Province" defaultValue={ province } onChange={ this._handleChange } ref={ node => this.province = node} />
          </div>
          <div className="ui field">
            <input className="ui input" type="text" placeholder="Postal Code" defaultValue={ postalcode } onChange={ this._handleChange } ref={ node => this.postalcode = node} />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady } = this.props
    if(defaultValue) this.setState(defaultValue)
    onReady()
  }

  componentDidUpdate(prevProps, prevState) {
    if(!_.isEqual(this.state, prevState)) {
      this.props.onChange(this.state)
    }
  }

  _handleChange() {
    this.setState({
      street1: this.street1.value,
      street2: this.street2.value,
      city: this.city.value,
      province: this.province.value,
      postalcode: this.postalcode.value
    })

  }

}

export default AddressField
