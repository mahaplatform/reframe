import React from 'react'
import ReactDOM from 'react-dom'
import Format from 'src/format'

class Detail extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    properties: React.PropTypes.array
  }

  static defaultProps = {
  }

  render() {
    var total = this.props.properties.length;
    var half = Math.ceil(total / 2);
    var left = this.props.properties.splice(0, half);
    var right = this.props.properties.splice(0, half);
    if(total % 2 == 1) {
      right.push({ label: '&nbsp;', value: null })
    }
    return (
      <div className="details">
        <div className="details-header">{this.props.title}</div>
        { [left,right].map((collection) => {
          return(
            <table className="ui small unstackable definition table">
              <tbody>
              { collection.map((property, index) => {
                return (
                  <tr>
                    <td dangerouslySetInnerHTML={{__html: property.label}}></td>
                    <td><Format {...this.props} format={property.format} value={property.value} key={`property_${index}`} /></td>
                  </tr>
                )
              })}
              </tbody>
            </table>
          )
        })}
      </div>
    )
  }

}

export default Detail
