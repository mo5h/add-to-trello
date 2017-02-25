import { connect } from 'react-redux'

import {
  Title,
  Desc,
  DueDate,
  Board,
  List,
  Position,
  FormList
} from 'components'

console.log(Desc)

// export default class SettingsCardForm extends React.Component {
//   render() {
//     return (
//       <div>settings card form</div>
//     );
//   }
// }

// map through the fields and return a list of field components
const getSettingsFields = (fields) => {
  const newFields = fields.map((field) => {
    switch (field.id) {
      case 'TITLE':
        return Title
      case 'DESCRIPTION':
        return Desc
      case 'DUE_DATE':
        return DueDate
      case 'BOARD':
        return Board
      case 'LIST':
        return List
      case 'POSITION':
        return Position
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
