import React from 'react'
import _ from 'lodash'
import Breadcrumb from './breadcrumb'

class Breadcrumbs extends React.Component {

  static propTypes = {
    breadcrumbs: React.PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      errors: this._validateProps(props)
    }
  }

  render() {
    if(!_.isEmpty(this.state.errors)) {
      console.warn(this.state.errors)
      return <div>Unable to load component</div>
    }
    return (
      <div className="breadcrumbs">
        <div className="ui breadcrumb">
          { this.props.breadcrumbs.map((item, index) => {
            return <Breadcrumb key={`breadcrumb_${index}`}
                               {...item} />
          })}
        </div>
      </div>
    )
  }

  _validateProps(props) {
    let errors = []
    if(!props.breadcrumbs) {
      errors.push('You must specify a breadcrumbs property')
    }
    return errors
  }

}

export default Breadcrumbs
