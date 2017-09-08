import Checkbox from './checkbox'
import Collection from './collection'
import Colorfield from './colorfield'
import Control from './control'
import Datefield from './datefield'
import Drawer from './drawer'
import Flash from './flash'
import Filefield from './filefield'
import Filter from './filter'
import Form from './form'
import Format from './format'
import Infinite from './infinite'
import Lookup from './lookup'
import List from './list'
import Modal from './modal'
import Popup from './popup'
import Prompt from './prompt'
import Scrollpane from './scrollpane'
import Search from './search'
import Searchbox from './searchbox'
import Stack from './stack'
import Table from './table'
import Tabs from './tabs'
import Tasks from './tasks'
import Textarea from './textarea'
import Textfield from './textfield'
import Timefield from './timefield'
import ToggleList from './toggle_list'
import Tray from './tray'

export default {
  Checkbox,
  Collection,
  Colorfield,
  Control,
  Datefield,
  Drawer,
  Filefield,
  Filter,
  Flash,
  Form,
  Format,
  Infinite,
  Lookup,
  List,
  Modal,
  Popup,
  Prompt,
  Scrollpane,
  Search,
  Searchbox,
  Stack,
  Table,
  Tabs,
  Tasks,
  Textarea,
  Textfield,
  Timefield,
  ToggleList,
  Tray
}

Object.keys(exports.default).map(key => {
  exports[key] = exports.default[key]
})
