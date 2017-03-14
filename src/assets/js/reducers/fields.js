import FieldTypes from 'libs/field-types'

const initialState = [
  {
    id: FieldTypes.TITLE,
    display: true
  },
  {
    id: FieldTypes.DESCRIPTION,
    display: true
  },
  {
    id: FieldTypes.DUE_DATE,
    display: true
  },
  {
    id: FieldTypes.BOARD,
    display: true
  },
  {
    id: FieldTypes.LIST,
    display: true
  },
  {
    id: FieldTypes.POSITION,
    display: true
  }
]

export default function fields (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
