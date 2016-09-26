import * as actionTypes from './action_types'
import _ from 'lodash'

const INITIAL_VALUE = {
  status: 'ready',
  file: null,
  totalChunks: 0,
  uploadedChunks: 0
}

export default (state = INITIAL_VALUE, action) => {

  switch (action.type) {

    case actionTypes.ADD_FILE:
      return {
        ...state,
        status: 'added',
        uploadedChunks: 0,
        totalChunks: action.totalChunks
      }

    case actionTypes.UPLOAD_BEGIN:
      return {
        ...state,
        status: 'uploading'
      }

    case actionTypes.UPLOAD_PROGRESS:
      return {
        ...state,
        uploadedChunks: state.uploadedChunks + 1
      }

    case actionTypes.UPLOAD_PROCESS_REQUEST:
      return {
        ...state,
        status: 'processing'
      }

    case actionTypes.UPLOAD_PROCESS_SUCCESS:
    case actionTypes.UPLOAD_SUCCESS:
      return {
        ...state,
        status: 'success',
        file: action.file
      }

    case actionTypes.UPLOAD_PROCESS_FAILURE:
    case actionTypes.UPLOAD_FAILED:
      return {
        ...state,
        status: 'failed'
      }

    case actionTypes.REMOVE_FILE:
      return {
        ...state,
        status: 'ready'
      }

    case actionTypes.CHANGE_FILE:
      return {
        ...state,
        status: 'ready'
      }

    default:
      return state

  }

}
