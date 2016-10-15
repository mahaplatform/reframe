import React from 'react'

class Tab extends React.Component {

  static propTypes = {
    label: React.PropTypes.string,
    active: React.PropTypes.bool,
    onChangeTab: React.PropTypes.func
  }

  static defaultProps = {
    active: false
  }

  render() {
    const { label, index, active } = this.props
    const classes = active ? 'item active' : 'item'
    return (
      <div className={classes} onClick={this._handleChangeTab.bind(this, index)}>
        {label}
      </div>
    )
  }

  _handleChangeTab(index) {
    this.props.onChangeTab(index)
  }

}

export default Tab
