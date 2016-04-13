import {
  LOAD_SESSION,
  SHOW_APPLICATION,
  SHOW_SESSION_ERROR,
  SHOW_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGES,
  DISMISS_FLASH_MESSAGE
} from './appActionTypes'

import _ from 'lodash'
import { uid } from '../utils/random'

const initialState = {
  status: 'LOADING',
  session: {},
  config: {},
  messages: [],
  user: {}
}

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => _.invoke(handlers, action.type, state, action) || state
}

export default createReducer(initialState, {

  [LOAD_SESSION](state, { session }) {
    const { config, user } = session
    return {
      ...state,
      session,
      config,
      user
    }
  },
  
  [SHOW_APPLICATION](state) {
    return {
      ...state,
      status: 'READY'
    }
  },
  
  [SHOW_SESSION_ERROR](state) {
    return {
      ...state,
      status: 'ERROR'
    }
  },
  
  [SHOW_FLASH_MESSAGE](state, { messageType, messageBody }) {
    return {
      ...state,
      messages: [
        { id: uid(), messageType, messageBody },
        ...state.messages
      ]
    }
  },

  [DISMISS_FLASH_MESSAGE](state, { id }) {
    return {
      ...state,
      messages: _.reject(state.messages, { id })
    }
  },
  
  [CLEAR_FLASH_MESSAGES](state) {
    return {
      ...state,
      messages: []
    }
  }

})
