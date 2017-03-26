import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'styles/index.scss'
import configureStore from './store'
import TrelloApi from 'libs/trello-api'

import PopupPage from './pages/PopupPage'
import { openSettings } from 'libs/chrome'

if (!TrelloApi.isAuthorized()) {
  openSettings()
}

const store = configureStore()

render(
  <Provider store={store}>
    <PopupPage />
  </Provider>,
  document.getElementById('root')
)
