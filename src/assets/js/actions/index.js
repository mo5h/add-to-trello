import * as storage from 'libs/storage'

export const MOVE_FIELD = 'MOVE_FIELD'
export const TOGGLE_FIELD = 'TOGGLE_FIELD'
export const SAVE_FIELDS = 'SAVE_FIELDS'

export const moveField = (dragIndex, hoverIndex) => {
  return {
    type: MOVE_FIELD,
    dragIndex,
    hoverIndex
  }
}

export const toggleField = (id, display) => {
  return {
    type: TOGGLE_FIELD,
    id,
    display
  }
}

export const saveFields = (fields) => {
  storage.set(storage.SETTINGS_KEY, fields)
  return {
    type: SAVE_FIELDS
  }
}
