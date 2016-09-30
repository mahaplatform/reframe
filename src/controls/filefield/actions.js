import * as actionTypes from './action_types'
import Api from '../../utils/api'

export function addFile(totalChunks) {
  return {
    type: actionTypes.ADD_FILE,
    totalChunks
  }
}

export function uploadBegin() {
  return {
    type: actionTypes.UPLOAD_BEGIN
  }
}

export function uploadProgress() {
  return {
    type: actionTypes.UPLOAD_PROGRESS
  }
}

/* RECORDS */

export const uploadProcess = (upload_id) => {
  return Api.patch({
    params: {
      upload_id
    },
    endpoint: '/admin/uploads/chunks',
    request: uploadProcessRequest,
    success: uploadProcessSuccess,
    failure: uploadProcessFailure
  })
}

export const uploadProcessRequest = (request) => ({
  type: actionTypes.UPLOAD_PROCESS_REQUEST
})

export const uploadProcessSuccess = (response) => ({
  type: actionTypes.UPLOAD_PROCESS_SUCCESS,
  file: response.entity
})

export const uploadProcessFailure = (response) => ({
  type: actionTypes.UPLOAD_PROCESS_FAILURE,
  error: response.entity
})

export function uploadSuccess(file) {
  return {
    type: actionTypes.UPLOAD_SUCCESS,
    file
  }
}

export function uploadFailure() {
  return {
    type: actionTypes.UPLOAD_FAILURE
  }
}

export function removeFile() {
  return {
    type: actionTypes.REMOVE_FILE
  }
}

export function changeFile() {
  return {
    type: actionTypes.CHANGE_FILE
  }
}
