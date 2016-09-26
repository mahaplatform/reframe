import React from 'react'

class Buttons extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    buttons: React.PropTypes.array,
    onValidate: React.PropTypes.func,
    onReset: React.PropTypes.func
  }

  render() {
    const { buttons } = this.props
    return (
      <div className="ui segment secondary right aligned form-buttons">
        { buttons.map((button, index) => {
          var classes = ['ui','button']
          if(button.type == 'submit') {
            classes.push('positive')
            return <button key={`button_${index}`} className={classes.join(' ')} onClick={this._handleValidateForm.bind(this)}>{button.label}</button>
          } else if(button.type == 'reset') {
              classes.push('negative')
              return <button key={`button_${index}`} className={classes.join(' ')} onClick={this._handleResetForm.bind(this)}>{button.label}</button>
          } else {
            if(button.color) {
              classes.push(button.color)
            }
            let onClick = (button.onClick) ? button.onClick.bind(this) : () => {}
            return <button key={`button_${index}`} className={classes.join(' ')} onClick={onClick}>{button.label}</button>
          }
        })}
      </div>
    )
  }

  _handleResetForm() {
    const { onResetForm, id } = this.props
    onResetForm(id)
  }

  _handleValidateForm() {
    const { onValidateForm, id } = this.props
    onValidateForm(id)
  }

}

export default Buttons
