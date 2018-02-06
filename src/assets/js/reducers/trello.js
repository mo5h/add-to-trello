import update from 'immutability-helper'
import initialState from 'libs/initial-state'

import {
  RECEIVE_ORGS
} from 'actions'

export default function trello (state = initialState.trello, action) {
  switch (action.type) {
    case RECEIVE_ORGS:
      return update(state, {
        organizations: { $set: action.organizations },
        receivedAt: { $set: action.receivedAt }
      })
    default:
      return state
  }
}
