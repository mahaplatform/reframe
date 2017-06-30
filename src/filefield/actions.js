import * as actionTypes from './action_types'

export const loadFiles = (endpoint, $ids) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query: { $ids },
  request: actionTypes.LOAD_FILES_REQUEST,
  success: actionTypes.LOAD_FILES_SUCCESS,
  failure: actionTypes.LOAD_FILES_FAILURE
})

export const addFile = (uniqueIdentifier, fileName, fileSize, contentType, totalChunks) => ({
  type: actionTypes.ADD_FILE,
  uniqueIdentifier,
  fileName,
  fileSize,
  contentType,
  totalChunks
})

export const uploadBegin = () => ({
  type: actionTypes.UPLOAD_BEGIN
})

export const uploadProgress = (uniqueIdentifier, progress) => ({
  type: actionTypes.UPLOAD_PROGRESS,
  uniqueIdentifier,
  progress
})

export const uploadSuccess = (uniqueIdentifier, response) => ({
  type: actionTypes.UPLOAD_SUCCESS,
  uniqueIdentifier,
  asset: response.data
})

export const uploadFailure = () => ({
  type: actionTypes.UPLOAD_FAILURE
})

export const removeFile = (uniqueIdentifier) => ({
  type: actionTypes.REMOVE_FILE,
  uniqueIdentifier
})

export const uploadComplete = () => ({
  type: actionTypes.UPLOAD_COMPLETE
})
