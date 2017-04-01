import 'libs/vendor/trello-client'
import * as storage from 'libs/storage'
import FieldTypes from 'libs/field-types'

const APP_KEY = process.env.TRELLO_APP_KEY

Trello.setKey(APP_KEY)
Trello.setToken(storage.get(storage.TRELLO_KEY, false))

const TrelloApi = {}

/**
 * Check localStorage if we're authorized.
 *
 * @return {Boolean}
 */
TrelloApi.isAuthorized = () => {
  return !!storage.get(storage.TRELLO_KEY, false)
}

/**
 * Make Trello API call to authorize the user.
 *
 * @return {Promise}
 */
TrelloApi.authorize = () => {
  return new Promise((resolve, reject) => {
    const name = 'Add to Trello'
    const expiration = 'never'
    const scope = {
      read: true,
      write: true,
      account: false
    }

    Trello.authorize({
      name,
      expiration,
      scope,
      success: resolve,
      error: reject
    })
  })
}

/**
 * Make Trello API call to deauthorize the user.
 * Clear any storage data as well.
 *
 * @return {void}
 */
TrelloApi.deauthorize = () => {
  Trello.deauthorize()
  storage.clear()
}

/**
 * Make Trello API call to submit a new card.
 *
 * @param {Object} data       - new card data
 * @return {Promise}
 */
TrelloApi.submitCard = (data) => {
  return new Promise((resolve, reject) => {
    let idList = null
    if (data[FieldTypes.bBOARDLIST]) {
      // pull out the list ID from the board-list field
      [ , idList ] = data[FieldTypes.BOARD_LIST].split('|')
    }

    const options = {
      name: data[FieldTypes.TITLE],
      desc: data[FieldTypes.DESCRIPTION],
      date: data[FieldTypes.DUE_DATE],
      pos: data[FieldTypes.POSITION],
      idList: idList
    }

    Trello.rest(
      'POST',
      'cards',
      options,
      resolve,
      reject
    )
  })
}

/**
 * Make Trello API call to get all boards and lists
 *
 * @return {Promise}
 */
TrelloApi.fetchAll = () => {
  return new Promise((resolve, reject) => {
    const options = {
      boards: 'open',
      board_lists: 'open',
      organizations: 'all'
    }

    Trello.rest('GET', 'members/me', options, resolve, reject)
  })
}

export default TrelloApi
