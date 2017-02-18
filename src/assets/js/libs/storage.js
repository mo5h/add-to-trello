const ORGS_KEY = 'a2t_orgs';
const SETTINGS_KEY = 'a2t_settings';

/**
 * Convenience method for getting a value from localStorage.
 *
 * @param  {String} key - localStorage key to search for.
 * @return {mixed}      - result of JSON parsing contents
 */
const get = (key) => {
  const raw = localStorage.getItem(key);
  return JSON.parse(raw);
};

/**
 * Convenience method for setting a value in localStorage.
 *
 * @param  {String} key - localStorage key to use
 * @param  {mixed}  val - what you want to save
 * @return {void}
 */
const set = (key, val) => {
  const json = JSON.stringify(val);
  localStorage.setItem(key, json);
};

export default {
  /**
   * Clear all localStorage keys.
   *
   * @return {void}
   */
  clear() {
    localStorage.removeItem(ORGS_KEY);
    localStorage.removeItem(SETTINGS_KEY);
  },

  /**
   * Get organizations data.
   *
   * @return {Object}
   */
  getOrgs() {
    return get(ORGS_KEY);
  },

  /**
   * Set organizations data.
   *
   * @param  {Object} data - what to store for organizations
   * @return {void}
   */
  setOrgs(data) {
    set(ORGS_KEY, data);
  },

  /**
   * Get settings data.
   *
   * @return {Object}
   */
  getSettings() {
    return get(SETTINGS_KEY);
  },

  /**
   * Set settings data.
   *
   * @param  {Object} data - what to store for settings
   * @return {void}
   */
  setSettings(data) {
    set(SETTINGS_KEY, data);
  }
}
