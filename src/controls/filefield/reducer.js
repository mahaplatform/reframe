import _ from 'lodash'

const INITIAL_VALUE = {
  files: [],
  status: 'pending'
}

export default (state = INITIAL_VALUE, action) => {

  switch (action.type) {

  case 'SET_READY':
    return {
      ...state,
      status: 'ready'
    }

  case 'LOAD_FILES_SUCCESS':
    return {
      ...state,
      status: 'ready',
      files: action.result.data.map(file => ({
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

  case 'ADD_FILE':
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

  case 'UPLOAD_BEGIN':
    return {
      ...state,
      status: 'uploading'
    }

  case 'UPLOAD_PROGRESS':
    return {
      ...state,
      files: state.files.map(file => (file.uniqueIdentifier === action.uniqueIdentifier) ? {
        ...file,
        status: 'uploading',
        progress: Math.floor(action.progress * 100),
        uploadedChunks: state.uploadedChunks + 1
      } : file)
    }

  case 'UPLOAD_PROCESS_REQUEST':
    return {
      ...state,
      status: 'processing'
    }

  case 'UPLOAD_PROCESS_SUCCESS':
    return {
      ...state,
      status: 'success'
    }

  case 'UPLOAD_SUCCESS':
    return {
      ...state,
      files: state.files.map(file => ({
        ...file,
        asset: (file.uniqueIdentifier === action.uniqueIdentifier) ? action.asset : file.asset,
        status: (file.uniqueIdentifier === action.uniqueIdentifier) ? 'success' : file.status
      }))
    }

  case 'UPLOAD_PROCESS_FAILURE':
  case 'UPLOAD_FAILED':
    return {
      ...state,
      status: 'failed'
    }

  case 'REMOVE_FILE':
    return {
      ...state,
      files: [
        ...state.files.slice(0, action.index),
        ...state.files.slice(action.index + 1)
      ]
    }

  case 'UPLOAD_COMPLETE':
    return {
      ...state,
      status: 'ready'
    }

  default:
    return state

  }

}
