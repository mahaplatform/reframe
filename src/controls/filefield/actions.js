import * as actionTypes from './action_types'
import Api from '../../utils/api'

export function addFile(cid, totalChunks) {
  return {
    type: actionTypes.ADD_FILE,
    cid,
    totalChunks
  }
}

export function uploadBegin(cid) {
  return {
    type: actionTypes.UPLOAD_BEGIN,
    cid
  }
}

export function uploadProgress(cid) {
  return {
    type: actionTypes.UPLOAD_PROGRESS,
    cid
  }
}

/* RECORDS */

export const uploadProcess = (cid, upload_id) => {
  return Api.patch({
    cid,
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
  type: actionTypes.UPLOAD_PROCESS_REQUEST,
  cid: request.cid
})

export const uploadProcessSuccess = (response) => ({
  type: actionTypes.UPLOAD_PROCESS_SUCCESS,
  cid: response.cid,
  file: response.entity
})

export const uploadProcessFailure = (response) => ({
  type: actionTypes.UPLOAD_PROCESS_FAILURE,
  cid: response.cid,
  error: response.entity
})

export function uploadSuccess(cid, file) {
  return {
    type: actionTypes.UPLOAD_SUCCESS,
    cid,
    file
  }
}

export function uploadFailure(cid) {
  return {
    type: actionTypes.UPLOAD_FAILURE,
    cid
  }
}

export function removeFile(cid) {
  return {
    type: actionTypes.REMOVE_FILE,
    cid
  }
}

export function changeFile(cid) {
  return {
    type: actionTypes.CHANGE_FILE,
    cid
  }
}
