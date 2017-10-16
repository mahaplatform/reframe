import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

class Panel extends React.Component {

  static propTypes = {
    component: PropTypes.any,
    header: PropTypes.any
  }

  render() {
    const { header, component } = this.props
    return (
      <div className="reframe-panel">
        { header &&
          <div className="reframe-panel-header">
            <div className="reframe-panel-inner">
              { _.isFunction() ? React.createElement(header) : header }
            </div>
          </div>
        }
        <div className="reframe-panel-body">
          <div className="reframe-panel-inner">
            { _.isFunction(component) ? React.createElement(component) : component }
          </div>
        </div>
      </div>
    )
  }

}

export default Panel
