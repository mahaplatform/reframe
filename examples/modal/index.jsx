import React from 'react'
import ReactDOM from 'react-dom'
import ModalWindow from 'src/modal/window.jsx'
import Logger from 'src/utils/logger'

export default class FormExamples extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalEnabled: false
    }
  }

  render() {
    return (
      <div>
        <h1>Modals</h1>
        <button className="ui large primary button" onClick={this.showModal.bind(this)}>Show Modal</button>

        {this.state.modalEnabled ? this.getModal() : null}
      </div>
    )
  }

  showModal() {
    this.setState({modalEnabled: true})
  }

  hideModal() {
    this.setState({modalEnabled: false})
  }

  getModal() {
    return (
      <ModalWindow title="Well look at that." onApprove={this.hideModal.bind(this)} onCancel={this.hideModal.bind(this)} onClose={this.hideModal.bind(this)}>
        <h1>Oh my gosh, whaddaya know!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, delectus dolor dolore molestias
          quibusdam tempore tenetur vero. Accusamus corporis nemo reprehenderit. A, alias autem blanditiis consectetur
          fugit incidunt iste tenetur.</p>
      </ModalWindow>
    )
  }

}
