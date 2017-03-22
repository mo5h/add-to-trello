import { combineReducers } from 'redux'
import fields from './fields'
import trello from './trello'

const rootReducer = combineReducers({
  fields,
  trello
})

export default rootReducer
