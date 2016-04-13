import {
  LOAD_SESSION,
  SHOW_APPLICATION,
  SHOW_SESSION_ERROR,
  SHOW_FLASH_MESSAGE,
  CLEAR_FLASH_MESSAGES,
  DISMISS_FLASH_MESSAGE
} from './appActionTypes'

import when from 'when/keys'
import API from '../api'

export const loadSession = (endpoint) => {
  return dispatch => {
    const api = new API()
    when.all({
        data: api.loadJSON(endpoint)
      })
      .tap(({data}) => {
        console.log(data)
        dispatch({
          type: LOAD_SESSION,
          session: data
        })
      })
      .then(() => dispatch({type: SHOW_APPLICATION}))
      .catch(error => {
        console.error(error)
        dispatch({type: SHOW_SESSION_ERROR})
      })
  }
}

export const showFlashMessage = (message, type) => {
  return {
    type: SHOW_FLASH_MESSAGE,
    messageType: type,
    messageBody: message
  }
}

export const showInfoMessage = message => showFlashMessage(message, 'info')
export const showSuccessMessage = message => showFlashMessage(message, 'success')
export const showErrorMessage = message => showFlashMessage(message, 'error')

export const clearFlashMessages = () => {
  return {
    type: CLEAR_FLASH_MESSAGES
  }
}

export const dismissFlashMessage = id => {
  return {
    type: DISMISS_FLASH_MESSAGE,
    id
  }
}

export default {
  loadSession,
  showFlashMessage,
  showInfoMessage,
  showSuccessMessage,
  showErrorMessage,
  dismissFlashMessage,
  clearFlashMessages
}
