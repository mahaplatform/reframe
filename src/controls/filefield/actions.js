export const setReady = () => ({
  type: 'SET_READY'
})

export const loadFiles = (endpoint, token, $ids) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query: { $ids },
  token,
  request: 'LOAD_FILES_REQUEST',
  success: 'LOAD_FILES_SUCCESS',
  failure: 'LOAD_FILES_FAILURE'
})

export const addFile = (uniqueIdentifier, fileName, fileSize, contentType, totalChunks) => ({
  type: 'ADD_FILE',
  uniqueIdentifier,
  fileName,
  fileSize,
  contentType,
  totalChunks
})

export const uploadBegin = () => ({
  type: 'UPLOAD_BEGIN'
})

export const uploadProgress = (uniqueIdentifier, progress) => ({
  type: 'UPLOAD_PROGRESS',
  uniqueIdentifier,
  progress
})

export const uploadSuccess = (uniqueIdentifier, response) => ({
  type: 'UPLOAD_SUCCESS',
  uniqueIdentifier,
  asset: response.data
})

export const uploadFailure = () => ({
  type: 'UPLOAD_FAILURE'
})

export const removeFile = (uniqueIdentifier) => ({
  type: 'REMOVE_FILE',
  uniqueIdentifier
})

export const uploadComplete = () => ({
  type: 'UPLOAD_COMPLETE'
})
