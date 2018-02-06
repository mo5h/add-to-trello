import PrefillTypes from 'libs/prefill-types'
import PageTitle from './PageTitle'
import PageUrl from './PageUrl'
import BoardList from './BoardList'
import UserDefined from './UserDefined'
import Position from './Position'
import DueDate from './DueDate'

/**
 * Return the associated prefill component based on the given ID.
 *
 * @param  {String} id - ID for the desired prefill component
 * @return {Component}
 */
export const getPrefillById = (id) => {
  switch (id) {
    case PrefillTypes.PAGE_TITLE.id:
      return PageTitle

    case PrefillTypes.PAGE_URL.id:
      return PageUrl

    case PrefillTypes.EMPTY.id:
    case PrefillTypes.USER_DEFINED.id:
      return UserDefined

    case PrefillTypes.BOARD_LIST_CHOOSE.id:
    case PrefillTypes.BOARD_LIST_LAST_USED.id:
      return BoardList

    case PrefillTypes.POSITION_TOP.id:
    case PrefillTypes.POSITION_BOTTOM.id:
      return Position

    case PrefillTypes.CURRENT_DATE.id:
    case PrefillTypes.CHOOSE_DATE.id:
      return DueDate

    default:
      return null
  }
}
