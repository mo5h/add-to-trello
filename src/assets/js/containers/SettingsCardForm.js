import { connect } from 'react-redux'

import {
  Title,
  Description,
  DueDate,
  Board,
  List,
  Position,
  FormList
} from 'components'

// map through the fields and return a list of field components
const getSettingsFields = (fields) => {
  const newFields = fields.map((field) => {
    switch (field.id) {
      case 'TITLE':
        return { ...field, component: Title }
      case 'DESCRIPTION':
        return { ...field, component: Description }
      case 'DUE_DATE':
        return { ...field, component: DueDate }
      case 'BOARD':
        return { ...field, component: Board }
      case 'LIST':
        return { ...field, component: List }
      case 'POSITION':
        return { ...field, component: Position }
    }
  })

  return newFields
}

const mapStateToProps = (state) => {
  return {
    fields: getSettingsFields(state.fields)
  }
}

const SettingsCardForm = connect(
  mapStateToProps,
)(FormList)

export default SettingsCardForm
