import * as actionTypes from './action_types'
import _ from 'lodash'

const INITIAL_VALUE = {
  files: [],
  status: 'ready'
}

export default (state = INITIAL_VALUE, action) => {

  switch (action.type) {

  case actionTypes.LOAD_FILES_SUCCESS:
    return {
      ...state,
      files: action.data.map(file => ({
        fileName: file.file_name,
        fileSize: file.file_size,
        contentType: file.content_type,
        status: 'success',
        progress: 0,
        uploadedChunks: 0,
        totalChunks: action.chunks_total,
        asset: file
      }))
    }

  case actionTypes.ADD_FILE:
    return {
      ...state,
      files: _.find(state.files, file => { return file.uniqueIdentifier === action.uniqueIdentifier }) ? state.files : [
        ...state.files,
        {
          uniqueIdentifier: action.uniqueIdentifier,
          fileName: action.fileName,
          fileSize: action.fileSize,
          contentType: action.contentType,
          status: 'added',
          progress: 0,
          uploadedChunks: 0,
          totalChunks: action.totalChunks
        }
      ]
    }

  case actionTypes.UPLOAD_BEGIN:
    return {
      ...state,
      status: 'uploading'
    }

  case actionTypes.UPLOAD_PROGRESS:
    return {
      ...state,
      files: state.files.map(file => {
        return (file.uniqueIdentifier === action.uniqueIdentifier) ? {
          ...file,
          status: 'uploading',
          progress: Math.floor(action.progress * 100),
          uploadedChunks: state.uploadedChunks + 1
        } : file
      })
    }

  case actionTypes.UPLOAD_PROCESS_REQUEST:
    return {
      ...state,
      status: 'processing'
    }

  case actionTypes.UPLOAD_PROCESS_SUCCESS:
    return {
      ...state,
      status: 'success'
    }

  case actionTypes.UPLOAD_SUCCESS:
    return {
      ...state,
      files: state.files.map(file => {
        return {
          ...file,
          asset: action.asset,
          status: (file.uniqueIdentifier === action.uniqueIdentifier) ? 'success' : file.status
        }
      })
    }

  case actionTypes.UPLOAD_PROCESS_FAILURE:
  case actionTypes.UPLOAD_FAILED:
    return {
      ...state,
      status: 'failed'
    }

  case actionTypes.REMOVE_FILE:
    const index = _.findIndex(state.files, file => { return file.uniqueIdentifier === action.uniqueIdentifier })
    return {
      ...state,
      files: [
        ...state.files.slice(0, index),
        ...state.files.slice(index + 1)
      ]
    }

  case actionTypes.UPLOAD_COMPLETE:
    return {
      ...state,
      status: 'ready'
    }

  default:
    return state

  }

}
