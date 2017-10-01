import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import Overview from './overview'
import React from 'react'
import _ from 'lodash'

class Filter extends React.Component {

  static propTypes = {
    filters: PropTypes.array,
    values: PropTypes.object,
    panels: PropTypes.array,
    onAddPanel: PropTypes.func,
    onChange: PropTypes.func,
    onUpdate: PropTypes.func,
    onRemovePanel: PropTypes.func
  }

  render() {
    const { panels } = this.props
    return (
      <div className="reframe-filters">
        <Overview { ...this.props } />
        <TransitionGroup>
          { panels.map((panel, index) => (
            <CSSTransition key={ `filter_panel_${index}` } classNames="slide" timeout={ 500 }>
              { React.cloneElement(panel, { ...this._getPanel(), key: `filter_panel_${index}` }) }
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    )
  }

  componentDidUpdate(prevProps) {
    const { values, onUpdate } = this.props
    if(!_.isEqual(prevProps.values, values)) onUpdate(values)
  }

  _getPanel() {
    const { values, onChange, onRemovePanel } = this.props
    return {
      values,
      onChange,
      onRemovePanel
    }
  }

}

export default Filter
