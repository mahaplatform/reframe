import { combineReducers } from 'redux-rubberstamp'
import { Drawer } from 'reframe'
import { Flash } from 'reframe'
import { Modal } from 'reframe'
import { Prompt } from 'reframe'
import { Tasks } from 'reframe'
import { Tray } from 'reframe'

export default combineReducers([
  Drawer,
  Flash,
  Modal,
  Prompt,
  Tasks,
  Tray
])
