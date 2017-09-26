const INITIAL_STATE = {
  component: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'OPEN':
    return {
      component: action.component
    }

  case 'CLOSE':
    return INITIAL_STATE

  default:
    return state
  }

}
