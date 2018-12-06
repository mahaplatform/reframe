export const INITIAL_STATE = {
  link_id: null,
  src: null,
  status: 'pending'
}

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'SET':
    return {
      ...state,
      link_id: action.link_id,
      src: action.src
    }

  case 'REMOVE':
    return {
      ...state,
      link_id: null,
      src: null,
      status: 'pending'
    }

  case 'FETCH_LINK_REQUEST':
    return {
      ...state,
      link_id: null,
      src: null,
      status: 'loading'
    }

  case 'FETCH_LINK_SUCCESS':
    return {
      ...state,
      link_id: action.result.data.id,
      src: action.result.data.video_url,
      status: 'success'
    }

  case 'FETCH_LINK_FAILURE':
    return {
      ...state,
      status: 'failure'
    }

  default:
    return state
  }

}

export default reducer
