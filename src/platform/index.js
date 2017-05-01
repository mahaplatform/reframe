import React from 'react'
import Drawer from '../drawer'
import Flash from '../flash'
import Modal from '../modal'
import Prompt from '../prompt'
import Tasks from '../tasks'
import Tray from '../tray'

class Platform extends React.Component {

  render() {
    const { children } = this.props
    return (
      <Flash>
        <Modal>
          <Prompt>
            <Drawer>
              <Tasks>
                <Tray>
                  { children }
                </Tray>
              </Tasks>
            </Drawer>
          </Prompt>
        </Modal>
      </Flash>
    )
  }

}

export default Platform
