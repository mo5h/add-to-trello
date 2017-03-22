import FieldTypes from 'libs/field-types'
import PrefillTypes from 'libs/prefill-types'

const initialState = {
  trello: {
    receivedAt: null,
    organizations: {
      me: {
        displayName: 'Boards',
        boards: []
      }
    }
  },
  fields: [
    {
      id: FieldTypes.TITLE,
      label: 'Title',
      display: true,
      prefill: {
        available: [PrefillTypes.EMPTY, PrefillTypes.PAGE_TITLE, PrefillTypes.USER_DEFINED],
        selected: PrefillTypes.PAGE_TITLE,
        value: null
      }
    },
    {
      id: FieldTypes.DESCRIPTION,
      label: 'Description',
      display: true,
      prefill: {
        available: [PrefillTypes.EMPTY, PrefillTypes.PAGE_URL, PrefillTypes.USER_DEFINED],
        selected: PrefillTypes.PAGE_URL,
        value: null
      }
    },
    {
      id: FieldTypes.DUE_DATE,
      label: 'Due Date',
      display: true,
      prefill: {
        available: [PrefillTypes.CURRENT_DATE, PrefillTypes.USER_DEFINED],
        selected: PrefillTypes.CURRENT_DATE,
        value: null
      }
    },
    {
      id: FieldTypes.BOARD_LIST,
      label: 'Board and List',
      display: true,
      prefill: {
        available: [PrefillTypes.BOARD_LIST_LAST_USED, PrefillTypes.BOARD_LIST_CHOOSE],
        selected: PrefillTypes.BOARD_LIST_LAST_USED,
        value: null
      }
    },
    {
      id: FieldTypes.POSITION,
      label: 'Position',
      display: true,
      prefill: {
        available: [PrefillTypes.POSITION_TOP, PrefillTypes.POSITION_BOTTOM, PrefillTypes.USER_DEFINED],
        selected: PrefillTypes.POSITION_BOTTOM,
        value: null
      }
    }
  ]
}

export default initialState
