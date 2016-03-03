import React from 'react'
import ReactDOM from 'react-dom'
import Format from '../format'

class Detail extends React.Component {

  static propTypes = {
    details: React.PropTypes.shape({
      title: React.PropTypes.string,
      properties: React.PropTypes.array
    })
  }

  static defaultProps = {
  }

  render() {
    var total = this.props.details.properties.length;
    var half = Math.ceil(total / 2);
    var left = this.props.details.properties.splice(0, half);
    var right = this.props.details.properties.splice(0, half);
    if(total % 2 == 1) {
      right.push({ label: '&nbsp;', value: null })
    }
    return (
      <div className="details">
        <div className="details-header">{this.props.details.title}</div>
        { [left,right].map((collection,index1) => {
          return(
            <table className="ui small unstackable definition table" key={`detail_column_${index1}`}>
              <tbody>
              { collection.map((property, index2) => {
                return (
                  <tr key={`detail_column_${index1}_row_${index2}`}>
                    <td dangerouslySetInnerHTML={{__html: property.label}}></td>
                    <td><Format {...this.props} format={property.format} value={property.value} /></td>
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
