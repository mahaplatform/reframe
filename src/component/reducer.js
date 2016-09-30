import { combineReducers } from 'redux'
import _ from 'lodash'
import * as actionTypes from './action_types'
import card from '../card/reducer'
import collection from '../collection/reducer'
import container from '../container/reducer'
import filefield from '../controls/filefield/reducer'
import form from '../form/reducer'
import tabs from '../tabs/reducer'
import tablefield from '../controls/tablefield/reducer'
import tasks from '../tasks/reducer'

const Reducer = (applicationReducers) => {

  return (state = {}, action) => {

    const reducers = {
      card,
      collection,
      container,
      filefield,
      form,
      tabs,
      tablefield,
      tasks,
      ...applicationReducers
    }

    let identifier = null

    switch (action.type) {

      case actionTypes.ADD_COMPONENT:

        identifier = action.cid || action.namespace

        return  {
          ...state,
          [identifier]: reducers[action.namespace](undefined, action)
        }

      case actionTypes.REMOVE_COMPONENT:

        identifier = action.cid || action.namespace

        return  _.omit(state, identifier)

      default:

        const namespace = action.type.split("/")[0]

        if(reducers[namespace]) {

          identifier = action.cid || namespace

          return {
            ...state,
            [identifier]: reducers[namespace](state[identifier], action)
          }

        } else {

          return state

        }

    }
  }

}

export default Reducer
