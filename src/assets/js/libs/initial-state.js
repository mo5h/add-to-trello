import FieldTypes from 'libs/field-types'

const initialState = {
  fields: [
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
}

export default initialState
