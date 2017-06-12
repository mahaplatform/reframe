import React from 'react'
import Drawer from '../drawer'
import Flash from '../flash'
import Popup from '../popup'
import Modal from '../modal'
import Prompt from '../prompt'
import Tasks from '../tasks'
import Tray from '../tray'

class Platform extends React.Component {

  render() {
    const { children } = this.props
    return (
      <Flash>
        <Popup>
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
        </Popup>
      </Flash>
    )
  }

}

export default Platform
