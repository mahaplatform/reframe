import ModalPanel from '../../components/modal_panel'
import ToggleList from '../toggle_list'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

class Search extends React.Component {

  static contextTypes = {
  }

  static propTypes = {
    endpoint: PropTypes.string,
    format: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func
    ]),
    label: PropTypes.string,
    multiple: PropTypes.bool,
    selected: PropTypes.array,
    text: PropTypes.string,
    onCanel: PropTypes.func,
    onDone: PropTypes.func,
    onSelect: PropTypes.func
  }

  render() {
    return (
      <ModalPanel { ...this._getPanel() }>
        <ToggleList { ...this._getToggleList() } />
      </ModalPanel>
    )
  }

  _getPanel() {
    const { label, multiple } = this.props
    return {
      title: `Choose ${label}`,
      leftItems: [
        { label: 'Cancel', handler: this._handleCancel.bind(this) }
      ],
      rightItems: multiple ? [
        { label: 'Done', handler: this._handleDone.bind(this) }
      ] : null
    }
  }

  _getToggleList() {
    const { endpoint, format, multiple, selected, text } = this.props
    const defaultValue = selected.map(item => item.id)
    return {
      defaultValue,
      endpoint,
      format,
      multiple,
      text,
      onChange: this._handleSelect.bind(this)
    }
  }

  _handleSelect(items) {
    const { multiple, selected, onDone, onSelect } = this.props
    onSelect(items)
    if(!multiple && !_.isEqual(items, selected)) onDone()
  }

  _handleCancel() {
    this.props.onCancel()
  }

  _handleDone() {
    this.props.onDone()
  }

}

// since we sent this component up to the modal, we need this to communicate
// back with the parent
const mapStateToProps = (state, props) => ({
})

export default connect(mapStateToProps)(Search)
