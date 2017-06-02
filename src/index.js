import Checkbox from './checkbox'
import Collection from './collection'
import Control from './control'
import Details from './details'
import Drawer from './drawer'
import Flash from './flash'
import Form from './form'
import Format from './format'
import History from './history'
import Infinite from './infinite'
import Modal from './modal'
import Platform from './platform'
import Prompt from './prompt'
import Scrollpane from './scrollpane'
import Stack from './stack'
import Table from './table'
import Tabs from './tabs'
import Tasks from './tasks'
import Textarea from './textarea'
import Textfield from './textfield'
import Tray from './tray'

export default {
  Checkbox,
  Collection,
  Control,
  Details,
  Drawer,
  Flash,
  Form,
  Format,
  History,
  Infinite,
  Modal,
  Platform,
  Prompt,
  Scrollpane,
  Stack,
  Table,
  Tabs,
  Tasks,
  Textarea,
  Textfield,
  Tray
}

Object.keys(exports.default).map(key => {
  exports[key] = exports.default[key]
})
