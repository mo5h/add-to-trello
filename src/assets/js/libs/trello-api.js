import 'libs/vendor/trello-client'
import * as storage from 'libs/storage'

const APP_KEY = process.env.TRELLO_APP_KEY

Trello.setKey(APP_KEY)
Trello.setToken(storage.get(storage.TRELLO_KEY))

/**
 * Check localStorage if we're authorized.
 *
 * @return {Boolean}
 */
export const isAuthorized = () => {
  return !!storage.get(storage.TRELLO_KEY)
}

/**
 * Make Trello API call to authorize the user.
 *
 * @param {Function} callback
 * @return {void}
 */
export const authorize = (callback) => {
  const name = 'Add to Trello'
  const expiration = 'never'
  const scope = {
    read: true,
    write: true,
    account: false
  }

  const success = () => callback()
  const error = (err) => callback(err)

  Trello.authorize({
    name,
    expiration,
    scope,
    success,
    error
  })
}

/**
 * Make Trello API call to deauthorize the user.
 * Clear any storage data as well.
 *
 * @return {void}
 */
export const deauthorize = () => {
  Trello.deauthorize()
  storage.clear()
}

/**
 * Make Trello API call to submit a new card.
 *
 * @param {Object} data       - new card data
 * @param {Function} callback - is called when API request is finished
 * @return {void}
 */
export const submitCard = (data, callback) => {
  const options = {
    name: data['card-title'],
    desc: data['card-description'],
    date: null,
    pos: data['position'],
    idList: data['list'],
    urlSource: null
  }

  Trello.rest(
    'POST',
    'cards',
    options,
    () => callback(),
    (err) => callback(err)
  )
}

/**
 * Make Trello API call to get organizations, boards, and lists for the user.
 * If data has been cached, use that instead.
 *
 * @param {Function} callback - is called with formatted data, or an error
 * @return {void}
 */
export const getOrgsAndBoards = (callback) => {
  const orgs = storage.get(storage.ORGS_KEY)
  if (orgs) {
    return callback(null, orgs)
  }

  const orgList = {
    me: { name: 'Boards', boards: [] }
  }

  getOrgs((err, orgs) => {
    if (err) {
      return callback(err)
    }

    $.each(orgs, (key, org) => {
      orgList[org.id] = {
        name: org.displayName,
        boards: []
      }
    })

    getBoards((err, boards) => {
      if (err) {
        return callback(err)
      }

      $.each(boards, (key, board) => {
        // add board to either it's organization or the 'me' catchall
        const organization = orgList[board.idOrganization || 'me']

        // make sure the organization we're trying to add
        // the board to exists
        if (organization !== undefined) {
          organization.boards.push(board)
        } else {
          // if the organization the board belongs to
          // wasn't added above for whatever reason,
          // add the board to the 'me' catchall
          orgList['me'].boards.push(board)
        }
      })

      storage.set(storage.ORGS_KEY, orgList)
      callback(null, orgList)
    })
  })
}

/**
 * Make Trello API call to get organizations.
 *
 * @param {Function} callback - is called when API request is finished
 * @return {void}
 */
export const getOrgs = (callback) => {
  Trello.rest(
    'GET',
    'members/me/organizations',
    (orgs) => callback(null, orgs),
    (err) => callback(err)
  )
}

/**
 * Make Trello API call to get all open boards with their lists included.
 *
 * @param {Function} callback - is called when API request is finished
 * @return {void}
 */
export const getBoards = (callback) => {
  const options = {
    filter: 'open',
    lists: 'open'
  }

  Trello.rest(
    'GET',
    'members/me/boards',
    options,
    (boards) => callback(null, boards),
    (err) => callback(err)
  )
}
