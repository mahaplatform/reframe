import React from 'react'
import Breadcrumb from './breadcrumb'

class Breadcrumbs extends React.Component {

  static propTypes = {
    breadcrumbs: React.PropTypes.array.isRequired
  }

  render() {
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

}

export default Breadcrumbs
