
export const openSettings = () => {
  chrome.tabs.create({
    url: chrome.extension.getURL('settings.html')
  })
}

export const openTrello = () => {
  chrome.tabs.create({ url: 'https://trello.com' })
}

export const getCurrentTab = (callback) => {
  const queryInfo = {
    active: true,
    currentWindow: true
  }

  chrome.tabs.query(queryInfo, (tabs) => {
    // send the first tab through the callback
    callback(tabs[0])
  })
}
