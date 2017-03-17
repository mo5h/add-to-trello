import update from 'react/lib/update'
import FieldTypes from 'libs/field-types'
import {
  MOVE_FIELD,
  TOGGLE_FIELD
} from 'actions'

const initialState = [
  {
    id: FieldTypes.TITLE,
    label: 'Title',
    display: true
  },
  {
    id: FieldTypes.DESCRIPTION,
    label: 'Description',
    display: true
  },
  {
    id: FieldTypes.DUE_DATE,
    label: 'Due Date',
    display: true
  },
  {
    id: FieldTypes.BOARD_LIST,
    label: 'Board and List',
    display: true
  },
  {
    id: FieldTypes.POSITION,
    label: 'Position',
    display: true
  }
]

export default function fields (state = initialState, action) {
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
    default:
      return state
  }
}
