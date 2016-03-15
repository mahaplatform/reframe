import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

class Select extends React.Component {

  static propTypes = {
    code        : React.PropTypes.string,
    disabled    : React.PropTypes.bool,
    placeholder : React.PropTypes.string,
    defaultValue: React.PropTypes.oneOfType(React.PropTypes.string, React.PropTypes.string),
    asyncStatus : React.PropTypes.string
  }

  static defaultProps = {
    code        : null,
    disabled    : false,
    placeholder : '',
    defaultValue: '',
    allowBlank  : true,
    onChange    : () => {}
  }

  constructor(props) {
    super(props)
    this.NO_SELECTION     = `EMPTY_${Math.floor(Math.random() * 999999).toString(36)}`
    this.state            = {
      value: '',
      mounted: false
    }
    this.deferredSetValue = undefined
  }

  render() {
    let cssClass = 'ui selection dropdown';
    if (this.props.asyncStatus === 'AWAITING') {
      cssClass += ' loading';
    }
    return (
      <div ref="control" className={cssClass}>
        <input type="hidden" name={this.props.code} onChange={this.handleChange.bind(this)} />
        <i className="dropdown icon"/>
        {(this.props.placeholder) ? <div className="default text" key="selection_default">{this.props.placeholder}</div> : <div className="text" key="selection_text"></div>}
        {((elem) => {
          if(elem.props.options) {
            return (
            <div className="menu">
              {this.props.allowBlank ? <div key="option_none" data-value={this.NO_SELECTION} className="item"
                                            style={{color: 'lightgrey'}}>No Selection</div> : null}
              { elem.props.options.map((option, index) => {
                let icon = option.icon ? <i className={`ui icon ${option.icon}`}/> : null;
                return <div className="item" key={`option_${index}`} data-value={option.key}>{icon}{option.value}</div>
              })}
            </div>
            )
          }
        })(this)}
      </div>
    )
  }

  componentDidMount() {
    $(this.refs.control).dropdown({
      onChange: this.handleChange.bind(this)
    })
    if (!this.props.allowBlank && !this.props.defaultValue) {
      $(this.refs.control).dropdown('set selected', _.get(_.first(this.props.options), 'key', null));
    }
    else {
      $(this.refs.control).dropdown('set selected', this.props.defaultValue);
    }
    //$(this.refs.control).dropdown('setting', 'onChange', this.handleChange.bind(this));
    $(this.refs.control).attr('tabIndex', 0)
    //this.setState({mounted: true})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.asyncStatus !== this.props.asyncStatus && nextProps.asyncStatus !== 'AWAITING') {
      _.defer(() => this.setValue(this.deferredSetValue || this.props.defaultValue || null))
    }
  }

  componentDidUpdate() {
    //$(this.refs.control).dropdown('destroy')
    //$(this.refs.control).dropdown('setting', 'onChange', this.handleChange.bind(this));
  }

  getValue() {
    return $(this.refs.control).dropdown('get value') || this.props.defaultValue || null
  }

  setValue(value) {
    if (this.props.asyncStatus === 'AWAITING') {
      this.deferredSetValue = value
      return
    }
    $(this.refs.control).dropdown('setting', 'onChange', _.noop);
    $(this.refs.control).dropdown('set selected', value)
    $(this.refs.control).dropdown('setting', 'onChange', this.handleChange.bind(this));
  }

  handleChange(event) {
    if (this.getValue() === this.NO_SELECTION) {
      $(this.refs.control).dropdown('clear')
    }
    this.props.onChange(this.props.code, event)
    $(this.refs.control).find('.text > span').attr('data-reactid', null)
  }

  clearField() {
    $(this.refs.control).dropdown('setting', 'onChange', _.noop);
    $(this.refs.control).dropdown('clear')
    $(this.refs.control).dropdown('setting', 'onChange', this.handleChange.bind(this));
  }

  getReference() {
    return { [this.props.code]: this }
  }
}

export default Select
