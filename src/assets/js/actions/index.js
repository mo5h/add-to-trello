export const MOVE_FIELD = 'MOVE_FIELD'

export const moveField = (dragIndex, hoverIndex) => {
  return {
    type: MOVE_FIELD,
    dragIndex,
    hoverIndex
  }
}
