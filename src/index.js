import Checkbox from './checkbox'
import Collection from './collection'
import Control from './control'
import Datefield from './details'
import Details from './details'
import Drawer from './drawer'
import Flash from './flash'
import Filefield from './filefield'
import Filter from './filter'
import Form from './form'
import Format from './format'
import History from './history'
import Infinite from './infinite'
import Lookup from './lookup'
import List from './list'
import Modal from './modal'
import Platform from './platform'
import Popup from './popup'
import Prompt from './prompt'
import Scrollpane from './scrollpane'
import Search from './search'
import Stack from './stack'
import Table from './table'
import Tabs from './tabs'
import Tasks from './tasks'
import Textarea from './textarea'
import Textfield from './textfield'
import ToggleList from './toggle_list'
import Tray from './tray'

export default {
  Checkbox,
  Collection,
  Control,
  Datefield,
  Details,
  Drawer,
  Filefield,
  Filter,
  Flash,
  Form,
  Format,
  History,
  Infinite,
  Lookup,
  List,
  Modal,
  Platform,
  Popup,
  Prompt,
  Scrollpane,
  Search,
  Stack,
  Table,
  Tabs,
  Tasks,
  Textarea,
  Textfield,
  ToggleList,
  Tray
}

Object.keys(exports.default).map(key => {
  exports[key] = exports.default[key]
})
