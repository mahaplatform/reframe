import React from 'react'
import ReactDOM from 'react-dom'
import './style.less'

import Root from './root'
import { Platform } from 'reframe'
import Demo from './demo'

const MyApp = () => (
  <Root>
    <Platform>
      <Demo />
    </Platform>
  </Root>
)

ReactDOM.render(<MyApp />, document.getElementById('app'))
