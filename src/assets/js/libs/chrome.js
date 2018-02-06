
/**
 * Open the settings page.
 */
export const openSettings = () => {
  chrome.tabs.create({
    url: chrome.extension.getURL('settings.html')
  })
}

/**
 * Open Trello in a new tab.
 */
export const openTrello = () => {
  chrome.tabs.create({ url: 'https://trello.com' })
}

/**
 * Get information on the current tab.
 * Sends the first tab through the callback.
 *
 * @param {Function} callback
 */
export const getCurrentTab = (callback) => {
  const queryInfo = {
    active: true,
    currentWindow: true
  }

  chrome.tabs.query(queryInfo, (tabs) => {
    callback(tabs[0])
  })
}
