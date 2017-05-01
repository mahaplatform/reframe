import { combineReducers } from 'redux-rubberstamp'
import Drawer from 'reframe/dist/drawer'
import Flash from 'reframe/dist/flash'
import Modal from 'reframe/dist/modal'
import Prompt from 'reframe/dist/prompt'
import Tasks from 'reframe/dist/tasks'
import Tray from 'reframe/dist/tray'

export default combineReducers([
  Drawer,
  Flash,
  Modal,
  Prompt,
  Tasks,
  Tray
])
