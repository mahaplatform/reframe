import React from 'react'
import _ from 'lodash'

export default (props) => (
  <div className="reframe-lookup-panel-results">
    { props.results.map((result, index) => {
      const value = _.get(result, text)
      return (
        <div key={`result_${index}`} className="reframe-lookup-panel-result" onClick={ props.onChoose(index) }>
          <div className="reframe-lookup-panel-result-label">
            <Format {...result} format={format} value={value} />
          </div>
          <div className="reframe-lookup-panel-result-icon">
            { index === props.selected ? <i className="green check icon" /> : null }
          </div>
        </div>
      )
    })}
  </div>
)
