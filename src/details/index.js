import React from 'react'
import ReactDOM from 'react-dom'
import Format from '../format'

class Detail extends React.Component {

  static propTypes = {
    details: React.PropTypes.shape({
      properties: React.PropTypes.array
    })
  }

  static defaultProps = {
  }

  render() {
    return (
      <div className="details">
        <table className="ui small unstackable definition table">
          <tbody>
            { this.props.details.properties.map((property, index) => {
              return (
                <tr key={`detail_${index}`}>
                  <td dangerouslySetInnerHTML={{__html: property.label}}></td>
                  <td><Format {...this.props} format={property.format} value={property.value} /></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

}

export default Detail
