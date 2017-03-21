import update from 'react/lib/update'
import initialState from 'libs/initial-state'
import * as storage from 'libs/storage'
import {
  MOVE_FIELD,
  TOGGLE_FIELD,
  UPDATE_PREFILL
} from 'actions'

const preloadedState = storage.get(storage.SETTINGS_KEY) || initialState.fields

export default function fields (state = preloadedState, action) {
  switch (action.type) {
    case MOVE_FIELD:
      const dragField = state[action.dragIndex]
      return update(state, {
        $splice: [
          [action.dragIndex, 1],
          [action.hoverIndex, 0, dragField]
        ]
      })
    case TOGGLE_FIELD:
      return update(state, {
        $apply: fields => fields.map((field, i) => {
          if (field.id !== action.id) return field
          return {
            ...field,
            display: action.display
          }
        })
      })
    case UPDATE_PREFILL:
      return update(state, {
        $apply: fields => fields.map((field, i) => {
          if (field.id !== action.id) return field
          // TODO: clear out `value` when it's not being used
          return {
            ...field,
            prefill: action.prefill
          }
        })
      })
    default:
      return state
  }
}
