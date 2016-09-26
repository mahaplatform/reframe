import { combineReducers } from 'redux'
import _ from 'lodash'
import * as actionTypes from './action_types'
import card from './card/reducer'
import collection from './collection/reducer'
import container from './container/reducer'
import filefield from './controls/filefield/reducer'
import form from './form/reducer'
import tabs from './tabs/reducer'
import tablefield from './controls/tablefield/reducer'
import tasks from './tasks/reducer'

const reducers = {
  card,
  collection,
  container,
  filefield,
  form,
  tabs,
  tablefield,
  tasks
}

export default (state, action) => {

  const namespace = action.type.split("/")[0]

  switch (action.type) {

    case actionTypes.ADD_COMPONENT:
      return  {
        ...state,
        [action.cid]: reducers[action.namespace](undefined, action)
      }

    case actionTypes.REMOVE_COMPONENT:
      return  _.omit(state, action.cid)

    default:
      if(state === undefined) {
        return {}
      } else if(reducers[namespace]) {
        if(action.cid) {
          return {
            ...state,
            [action.cid]: reducers[namespace](state[action.cid], action)
          }
        } else {
          return reducers[namespace](state, action)
        }
      } else {
        return state
      }

  }
}
