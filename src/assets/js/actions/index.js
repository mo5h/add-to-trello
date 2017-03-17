export const MOVE_FIELD = 'MOVE_FIELD'
export const TOGGLE_FIELD = 'TOGGLE_FIELD'

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
