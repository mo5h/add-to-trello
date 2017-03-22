import update from 'react/lib/update'
import initialState from 'libs/initial-state'
import * as storage from 'libs/storage'

import {
  RECEIVE_ORGS
} from 'actions'

const preloadedState = storage.get(storage.ORGS_KEY) || initialState.trello

export default function trello (state = preloadedState, action) {
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
