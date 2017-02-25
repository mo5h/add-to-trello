const localStorage = window.localStorage

export const ORGS_KEY = 'a2t_orgs'
export const SETTINGS_KEY = 'a2t_settings'
export const TRELLO_KEY = 'a2t_trello_token'

/**
 * get a value from localStorage.
 *
 * @param  {String} key - localStorage key to search for.
 * @return {mixed}      - result of JSON parsing contents
 */
export const get = (key) => {
  const raw = localStorage.getItem(key)
  return JSON.parse(raw)
}

/**
 * set a value in localStorage.
 *
 * @param  {String} key - localStorage key to use
 * @param  {mixed}  val - what you want to save
 * @return {void}
 */
export const set = (key, val) => {
  const json = JSON.stringify(val)
  localStorage.setItem(key, json)
}

/**
 * clear a value from localstorage. If no key given,
 * clear everything.
 *
 * @param  {String} key - localStorage key to use
 * @return {void}
 */
export const clear = (key = null) => {
  if (key) {
    localStorage.removeItem(key)
    return
  }

  localStorage.removeItem(ORGS_KEY)
  localStorage.removeItem(SETTINGS_KEY)
  localStorage.removeItem(TRELLO_KEY)
}
