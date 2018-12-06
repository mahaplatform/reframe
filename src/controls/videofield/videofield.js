import Buttons from '../../components/buttons'
import Button from '../../components/button'
import PropTypes from 'prop-types'
import Picker from './picker'
import React from 'react'

class VideoField extends React.Component{

  static contextTypes = {
    form: PropTypes.object
  }

  static propTypes = {
    defaultValue: PropTypes.number,
    src: PropTypes.string,
    link_id: PropTypes.number,
    onFetchLink: PropTypes.func,
    onCreateLink: PropTypes.func,
    onReady: PropTypes.func
  }

  _handlePicker = this._handlePicker.bind(this)
  _handleRemove = this._handleRemove.bind(this)
  _handleSet = this._handleSet.bind(this)

  render() {
    const { src } = this.props
    if(!src) return <Button { ...this._getNewButton() } />
    return (
      <div className="reframe-videofield">
        <div className="reframe-videofield-player">
          <iframe { ...this._getIframe()} />
        </div>
        <div className="reframe-videofield-footer">
          <Buttons { ...this._getEditButtons() } />
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { defaultValue, onReady, onFetchLink } = this.props
    if(defaultValue) onFetchLink(defaultValue)
    if(onReady) onReady()
  }

  componentDidUpdate(prevProps) {
    const { link_id, onChange } = this.props
    if(link_id !== prevProps.link_id) {
      onChange(link_id)
    }
  }

  _getIframe() {
    const { src } = this.props
    return {
      src,
      frameBorder: 0,
      allowFullScreen: true
    }
  }

  _getPicker() {
    const { cid, onCreateLink } = this.props
    return {
      cid,
      onCreateLink
    }
  }

  _getEditButtons() {
    return {
      buttons: [
        {
          label: 'Remove',
          color: 'red',
          handler: this._handleRemove
        },{
          label: 'Change',
          color: 'green',
          handler: this._handlePicker
        }
      ]
    }
  }

  _getNewButton() {
    return {
      className: 'ui blue button',
      label: 'Embed Video',
      handler: this._handlePicker
    }
  }

  _handlePicker() {
    this.context.form.push(<Picker { ...this._getPicker() } />)
  }

  _handleRemove() {
    this.props.onRemove()
  }

  _handleSet(src) {
    this.props.onSet(src)
  }

}

export default VideoField
